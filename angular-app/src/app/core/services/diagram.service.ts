import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diagram } from '../models/diagram.model';

@Injectable({ providedIn: 'root' })
export class DiagramService {
  private http = inject(HttpClient);

  getAll(): Observable<Diagram[]> {
    return this.http.get<Diagram[]>('/data/diagrams.json');
  }
}
