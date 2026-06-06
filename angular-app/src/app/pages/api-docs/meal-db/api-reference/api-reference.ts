import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../../core/services/api-page-base';
import { TocItem } from '../../../../core/services/toc.service';

@Component({
  selector: 'app-meal-db-api-reference',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './api-reference.html',
})
export class MealDbApiReference extends ApiPageBase {
  readonly BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
  protected getTocItems(): TocItem[] {
    return [
      { id: 'search-endpoints', label: this.lang.t('api.mdb.ref.search-title')  },
      { id: 'lookup-random',    label: this.lang.t('api.mdb.ref.lookup-title')  },
      { id: 'filter-endpoints', label: this.lang.t('api.mdb.ref.filter-title')  },
      { id: 'list-endpoints',   label: this.lang.t('api.mdb.ref.list-title')    },
      { id: 'response-codes',   label: this.lang.t('api.mdb.ref.errors-title')  },
    ];
  }

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

  copyUrl(text: string, btn: HTMLButtonElement) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('i') ?? btn;
      const prev = (icon as HTMLElement).className;
      (icon as HTMLElement).className = 'fas fa-check';
      setTimeout(() => { (icon as HTMLElement).className = prev; }, 1800);
    });
  }
}
