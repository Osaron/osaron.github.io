import { Directive, OnInit, OnDestroy, inject, AfterViewInit, HostListener, effect } from '@angular/core';
import { TocService, TocItem } from './toc.service';
import { LanguageService } from './language.service';

declare const Prism: { highlightAll(): void };

@Directive()
export abstract class ApiPageBase implements OnInit, AfterViewInit, OnDestroy {
  protected tocService = inject(TocService);
  lang = inject(LanguageService);
  protected abstract getTocItems(): TocItem[];

  constructor() {
    effect(() => {
      this.tocService.set(this.getTocItems());
    });
  }

  ngOnInit() {
    this.tocService.set(this.getTocItems());
  }

  ngAfterViewInit() {
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }

  ngOnDestroy() {
    this.tocService.set([]);
  }

  @HostListener('window:scroll')
  onScroll() {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.api-section, h2[id]')
    );
    if (!sections.length) return;
    const scrollPos = window.scrollY + 140;
    let current = sections[0].id;
    for (const el of sections) {
      if (el.id && scrollPos >= el.offsetTop) current = el.id;
    }
    this.tocService.setActive(current);
  }
}
