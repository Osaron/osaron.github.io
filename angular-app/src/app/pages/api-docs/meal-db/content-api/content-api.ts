import { Component, signal } from '@angular/core';
import { ApiPageBase } from '../../../../core/services/api-page-base';
import { TocItem } from '../../../../core/services/toc.service';

@Component({
  selector: 'app-meal-db-content-api',
  standalone: true,
  imports: [],
  templateUrl: './content-api.html',
})
export class MealDbContentApi extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'content-api',     label: this.lang.t('api.mdb.content.meal-obj-title') },
      { id: 'ingredients',     label: this.lang.t('api.mdb.content.ing-title')       },
      { id: 'filter-lookup',   label: this.lang.t('api.mdb.content.filter-title')    },
      { id: 'images',          label: this.lang.t('api.mdb.content.img-title')       },
    ];
  }

  activeTab = signal('js-filter');

  copyCode(btn: HTMLButtonElement) {
    const code = btn.closest('.code-example')?.querySelector('pre code');
    if (code) {
      navigator.clipboard.writeText(code.textContent ?? '').then(() => {
        const icon = btn.querySelector('i') ?? btn;
        const prev = (icon as HTMLElement).className;
        (icon as HTMLElement).className = 'fas fa-check';
        setTimeout(() => { (icon as HTMLElement).className = prev; }, 1800);
      });
    }
  }
}
