import { Component, signal } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [],
  templateUrl: './authentication.html',
})
export class Authentication extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'authentication',  label: this.lang.t('api.toc.authentication')  },
      { id: 'rate-limiting',   label: this.lang.t('api.toc.rate-limiting')   },
      { id: 'handling-errors', label: this.lang.t('api.toc.handling-errors') },
      { id: 'best-practices',  label: this.lang.t('api.toc.best-practices')  },
    ];
  }

  activeTab = signal('js-retry');

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
