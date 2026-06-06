import { Component, signal } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-content-api',
  standalone: true,
  imports: [],
  templateUrl: './content-api.html',
})
export class ContentApi extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'content-api',       label: this.lang.t('api.toc.overview')           },
      { id: 'quotes-random',     label: this.lang.t('api.toc.quotes-random')      },
      { id: 'quotes-list',       label: this.lang.t('api.toc.quotes-list')        },
      { id: 'authors-deep',      label: this.lang.t('api.toc.authors-deep')       },
      { id: 'filtering-recipes', label: this.lang.t('api.toc.filtering-recipes')  },
    ];
  }

  activeTab = signal('random-js');

  copyCode(btn: HTMLButtonElement) {
    const code = btn.closest('.code-example')?.querySelector('pre code');
    if (code) {
      navigator.clipboard.writeText(code.textContent ?? '').then(() => {
        const icon = btn.querySelector('i')!;
        const prev = icon.className;
        icon.className = 'fas fa-check';
        setTimeout(() => { icon.className = prev; }, 1800);
      });
    }
  }
}
