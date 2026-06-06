import { Component } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-api-reference',
  standalone: true,
  imports: [],
  templateUrl: './api-reference.html',
})
export class ApiReference extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'overview', label: this.lang.t('api.toc.overview'), children: [
        { id: 'base-url',          label: this.lang.t('api.toc.base-url')          },
        { id: 'endpoint-overview', label: this.lang.t('api.toc.endpoint-overview') },
      ]},
      { id: 'error-codes', label: this.lang.t('api.toc.error-codes') },
    ];
  }

  copyUrl(text: string, btn: HTMLButtonElement) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('i')!;
      const prev = icon.className;
      icon.className = 'fas fa-check';
      setTimeout(() => { icon.className = prev; }, 1800);
    });
  }
}
