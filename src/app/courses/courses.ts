import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount-pipe';
import { DisableAfterClickDirective } from '../disable-after-click';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  catId: number;
  category: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class CoursesComponent implements OnChanges {

  @Input() selectedCategory: string = 'All';
  @Output() totalPriceChange = new EventEmitter<number>();
  @Output() courseSelected = new EventEmitter<number>();
  courses: Course[] = [
    {
      id: 1,
      title: 'Angular',
      instructor: 'mona',
      price: 100,
      seats: 20,
      image: 'images/images.png',
      catId: 1,
      category: 'front'
    },
    {
      id: 2,
      title: 'React',
      instructor: 'sara',
      price: 120,
      seats: 10,
      image: 'images/images.png',
      catId: 2,
      category: 'front'
    },
    {
      id: 3,
      title: 'Vue',
      instructor: 'abdelrahman',
      price: 90,
      seats: 25,
      image: 'images/images.png',
      catId: 1,
      category: 'ui'
    },
    {
      id: 4,
      title: 'Node.js',
      instructor: 'mariam',
      price: 150,
      seats: 10,
      image: 'images/images.png',
      catId: 3,
      category: 'web'
    },
    {
      id: 5,
      title: 'PHP',
      instructor: 'hend',
      price: 80,
      seats: 30,
      image: 'images/images.png',
      catId: 2,
      category: 'back'
    }
  ];

  filteredCourses: Course[] = [];
  total: number = 0;

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