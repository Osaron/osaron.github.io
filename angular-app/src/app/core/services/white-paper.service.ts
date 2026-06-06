import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WhitePaper } from '../models/white-paper.model';

@Injectable({ providedIn: 'root' })
export class WhitePaperService {
  private http = inject(HttpClient);

  getAll(): Observable<WhitePaper[]> {
    return this.http.get<WhitePaper[]>('/data/white-papers.json');
  }
}
