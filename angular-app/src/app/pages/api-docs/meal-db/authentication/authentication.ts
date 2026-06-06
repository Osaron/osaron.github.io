import { Component, signal } from '@angular/core';
import { ApiPageBase } from '../../../../core/services/api-page-base';
import { TocItem } from '../../../../core/services/toc.service';

@Component({
  selector: 'app-meal-db-authentication',
  standalone: true,
  imports: [],
  templateUrl: './authentication.html',
})
export class MealDbAuthentication extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'authentication',  label: this.lang.t('api.mdb.auth.overview-title') },
      { id: 'rate-limits',     label: this.lang.t('api.mdb.auth.limits-title')   },
      { id: 'error-handling',  label: this.lang.t('api.mdb.auth.errors-title')   },
      { id: 'best-practices',  label: this.lang.t('api.mdb.auth.best-title')     },
    ];
  }

  activeTab = signal('js-null');

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
