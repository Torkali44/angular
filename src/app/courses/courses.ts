import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  catId: number;
  category :string;
}
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent {

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular ',
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
      title: 'Vue ',
      instructor: 'abdelrahman',
      price: 90,
      seats: 25,
      image: 'images/images.png',
      catId: 1,
      category: 'ui'
    },
    {
      id: 4,
      title: 'Node.js ',
      instructor: 'mariam',
      price: 150,
      seats: 10,
      image: 'images/images.png',
      catId: 3,
      category: 'web'
    },
    {
      id: 5,
      title: 'PHP ',
      instructor: 'hend',
      price: 80,
      seats: 30,
      image: 'images/images.png',
      catId: 2,
      category: 'back'
    }
    
  ];
  selectedCategory: string = 'All';
  decreaseSeat(course: any) {
    if (course.seats === 0) {
      alert("Seats are full");
    } else {
      course.seats--;
    }
  }
}
