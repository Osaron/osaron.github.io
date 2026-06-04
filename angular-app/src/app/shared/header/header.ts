import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../../core/services/dark-mode.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  darkMode = inject(DarkModeService);
  mobileMenuOpen = signal(false);

  readonly projectLinks = [
    { path: 'user-guides',       label: 'User Guides',        icon: '/images/drop-down/User Guide icon.png' },
    { path: 'blogs',             label: 'Technical Articles', icon: '/images/drop-down/Blog icon.png' },
    { path: 'workflow-diagrams', label: 'Diagrams',           icon: '/images/drop-down/Visuals icon.png' },
    { path: 'videos',            label: 'Videos',             icon: '/images/drop-down/Content Strategy icon.png' },
    { path: 'white-papers',      label: 'White Papers',       icon: '/images/drop-down/White Paper icon.png' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
