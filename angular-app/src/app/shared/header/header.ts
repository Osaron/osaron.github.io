import { Component, inject, signal, HostListener } from '@angular/core';
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
  dropdownOpen = signal(false);
  mobileMenuOpen = signal(false);

  readonly projectLinks = [
    { path: 'blogs',              label: 'Technical Articles', icon: '/images/drop-down/Blog icon.png' },
    { path: 'user-guides',        label: 'User Guides',        icon: '/images/drop-down/User Guide icon.png' },
    { path: 'white-papers',       label: 'White Papers',       icon: '/images/drop-down/White Paper icon.png' },
    { path: 'workflow-diagrams',  label: 'Workflow Diagrams',  icon: '/images/drop-down/Visuals icon.png' },
    { path: 'videos',             label: 'Videos',             icon: '/images/drop-down/Content Strategy icon.png' },
    { path: 'api-docs',           label: 'API Docs',           icon: '/images/drop-down/Blog icon.png' },
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownOpen.set(false);
    }
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen.update(v => !v);
  }

  closeDropdown() {
    this.dropdownOpen.set(false);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
