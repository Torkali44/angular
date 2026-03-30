import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from '../courses/courses';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, CoursesComponent],
  templateUrl: './order.html',
})
export class OrderComponent {

  selectedCategory: string = 'All';
  totalPrice: number = 0;

  onCourseSelected(price: number) {
    this.totalPrice += price;
  }
}