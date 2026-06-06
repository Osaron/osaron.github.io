import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.html',
})
export class Faq extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'general',  label: this.lang.t('api.toc.general-questions')  },
      { id: 'quotable', label: this.lang.t('api.toc.quotable-questions') },
      { id: 'mealdb',   label: this.lang.t('api.toc.mealdb-questions')   },
      { id: 'about',    label: this.lang.t('api.toc.about-docs')         },
    ];
  }

  open = signal<Set<number>>(new Set());

  toggle(i: number): void {
    const s = new Set(this.open());
    s.has(i) ? s.delete(i) : s.add(i);
    this.open.set(s);
  }

  isOpen(i: number): boolean { return this.open().has(i); }
}
