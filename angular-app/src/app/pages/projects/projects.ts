import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  lang = inject(LanguageService);
}
