import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  standalone: true, 
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {

  students = [
    {
      id: 1,
      name: 'Tork',
      age: 23,
      photoUrl: 'images/tork.png'
    },
    
  ];

}