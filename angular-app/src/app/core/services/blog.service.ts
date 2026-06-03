import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private http = inject(HttpClient);

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>('/data/blogs.json');
  }
}
