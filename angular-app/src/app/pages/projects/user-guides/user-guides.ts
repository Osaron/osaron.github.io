import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GuideService } from '../../../core/services/guide.service';

@Component({
  selector: 'app-user-guides',
  imports: [AsyncPipe],
  templateUrl: './user-guides.html',
  styleUrl: './user-guides.scss',
})
export class UserGuides {
  guides$ = inject(GuideService).getAll();
}
