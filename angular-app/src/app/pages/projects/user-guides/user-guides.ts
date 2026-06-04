import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GuideService } from '../../../core/services/guide.service';
import { Guide } from '../../../core/models/guide.model';

@Component({
  selector: 'app-user-guides',
  imports: [AsyncPipe],
  templateUrl: './user-guides.html',
  styleUrl: './user-guides.scss',
})
export class UserGuides {
  guides$ = inject(GuideService).getAll();

  openPdf(guide: Guide) {
    window.open(`/projects/user-guides/${guide.slug}/manual.pdf`, '_blank', 'noopener');
  }
}
