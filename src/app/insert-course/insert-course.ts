import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService, Category } from '../services/category.service';
import { CourseService, Course } from '../services/course.service';

@Component({
  selector: 'app-insert-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert-course.html',
  styleUrls: ['./insert-course.css']
})
export class InsertCourseComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  course: Course = {
    title: '',
    instructor: '',
    price: 0,
    seats: 0,
    image: '',
    catId: '',
    category: ''
  };
  private subscriptions: Subscription = new Subscription();

  constructor(
    private categoryService: CategoryService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    const sub = this.categoryService.getAllCateogories().subscribe({
      next: (cats) => this.categories = cats,
      error: (err) => console.error('Error loading categories', err)
    });
    this.subscriptions.add(sub);
  }

  updateCategoryName() {
    const selectedCat = this.categories.find(c => c.id === this.course.catId);
    if (selectedCat) {
      this.course.category = selectedCat.name;
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    if (this.course.title && this.course.catId) {
      const sub = this.courseService.addCourse(this.course).subscribe({
        next: (addedCourse) => {
          console.log('Course added', addedCourse);
          this.router.navigate(['/order']);
        },
        error: (err) => console.error('Error adding course', err)
      });
      this.subscriptions.add(sub);
    }
  }
}