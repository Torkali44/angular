import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Course {
  id?: string; // Optional for new courses
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  catId: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiBaseUrl}courses`);
  }

  getCoursesByCategoryID(catID: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiBaseUrl}courses?catId=${catID}`);
  }

  getCourseByID(cID: string): Observable<Course> {
    return this.http.get<Course>(`${environment.apiBaseUrl}courses/${cID}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.apiBaseUrl}courses`, course);
  }
}