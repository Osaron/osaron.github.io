import { Component, inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
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
  }

  ngOnDestroy() {
    this.doc.body.classList.remove('api-docs-page');
  }
}
