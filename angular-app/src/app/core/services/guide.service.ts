import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guide } from '../models/guide.model';

@Injectable({ providedIn: 'root' })
export class GuideService {
  private http = inject(HttpClient);

  getAll(): Observable<Guide[]> {
    return this.http.get<Guide[]>('/data/manuals.json');
  }
}
