import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount-pipe';
import { DisableAfterClickDirective } from '../disable-after-click';
import { CourseService, Course } from '../services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class CoursesComponent implements OnChanges, OnInit, OnDestroy {

  @Input() selectedCategory: string = 'All';
  @Output() totalPriceChange = new EventEmitter<number>();
  @Output() courseSelected = new EventEmitter<number>();
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  total: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    const sub = this.courseService.getAllCourses().subscribe({
      next: (courses) => {
        this.courses = courses as Course[];
        this.filterCourses();
      },
      error: (err) => console.error('Error loading courses', err)
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filterCourses();
  }

  filterCourses() {
    if (this.selectedCategory === 'All') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(
        c => c.category === this.selectedCategory
      );
    }
    this.total = this.filteredCourses.reduce((sum, c) => sum + c.price, 0);
    setTimeout(() => {
      this.totalPriceChange.emit(this.total);
    }, 0);
  }

  decreaseSeat(course: any) {
    if (course.seats === 0) {
      alert("Seats are full");
    } else {
      course.seats--;
      this.courseSelected.emit(course.price);
    }
  }
}