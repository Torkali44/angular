import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Category {
  id: string;
  name: string;
  // Add other fields as needed
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCateogories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}categories`);
  }
}