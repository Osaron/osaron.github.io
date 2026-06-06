import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  darkMode = inject(DarkModeService);
  lang     = inject(LanguageService);
  mobileMenuOpen = signal(false);

  readonly projectLinks = [
    { path: 'user-guides',       labelKey: 'projects.user-guides',  icon: '/images/drop-down/User Guide icon.png' },
    { path: 'blogs',             labelKey: 'projects.articles',      icon: '/images/drop-down/Blog icon.png' },
    { path: 'workflow-diagrams', labelKey: 'projects.diagrams',      icon: '/images/drop-down/Visuals icon.png' },
    { path: 'videos',            labelKey: 'projects.videos',        icon: '/images/drop-down/Content Strategy icon.png' },
    { path: 'white-papers',      labelKey: 'projects.white-papers',  icon: '/images/drop-down/White Paper icon.png' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
