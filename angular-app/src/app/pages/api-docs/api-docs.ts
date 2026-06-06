import { Component, inject, OnInit, OnDestroy, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Sidebar } from './sidebar/sidebar';
import { Toc } from './toc/toc';

@Component({
  selector: 'app-api-docs',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Toc],
  templateUrl: './api-docs.html',
  styleUrl: './api-docs.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ApiDocs implements OnInit, OnDestroy {
  private doc = inject(DOCUMENT);

  ngOnInit() {
    this.doc.body.classList.add('api-docs-page');
    this.updateSidebarOffset();
  }

  ngOnDestroy() {
    this.doc.body.classList.remove('api-docs-page');
    this.doc.documentElement.style.removeProperty('--sidebar-bottom-offset');
  }

  @HostListener('window:scroll')
  updateSidebarOffset(): void {
    const footer = this.doc.querySelector('app-footer');
    if (!footer) return;
    const footerTop = footer.getBoundingClientRect().top;
    const overlap = Math.max(0, window.innerHeight - footerTop);
    this.doc.documentElement.style.setProperty('--sidebar-bottom-offset', `${overlap}px`);
  }
}
