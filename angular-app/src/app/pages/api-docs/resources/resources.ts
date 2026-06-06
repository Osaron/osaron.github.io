import { Component, computed, signal } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.html',
})
export class Resources extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'live-demo',      label: this.lang.t('api.toc.live-demo')      },
      { id: 'quick-start',    label: this.lang.t('api.toc.quick-start')    },
      { id: 'external-links', label: this.lang.t('api.toc.external-links') },
    ];
  }

  tagInput       = signal('');
  maxLengthInput = signal('');
  quote          = signal<any>(null);
  loading        = signal(false);
  error          = signal<string | null>(null);
  activeTab      = signal('js-demo');

  generatedUrl = computed(() => {
    const params = new URLSearchParams();
    if (this.tagInput())       params.set('tags',      this.tagInput());
    if (this.maxLengthInput()) params.set('maxLength', this.maxLengthInput());
    const qs = params.toString();
    return `https://api.quotable.io/quotes/random${qs ? '?' + qs : ''}`;
  });

  quoteJson = computed(() => {
    const q = this.quote();
    return q ? JSON.stringify([q], null, 2) : '';
  });

  async getQuote(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    this.quote.set(null);
    try {
      const res = await fetch(this.generatedUrl());
      if (res.status === 429) { this.error.set(this.lang.t('api.demo.error.rate-limit')); return; }
      if (!res.ok)            { this.error.set(this.lang.t('api.demo.error.generic'));    return; }
      const [data] = await res.json();
      this.quote.set(data);
    } catch (e: unknown) {
      const isOnline = navigator.onLine;
      this.error.set(isOnline
        ? this.lang.t('api.demo.error.unreachable')
        : this.lang.t('api.demo.error.network'));
    } finally {
      this.loading.set(false);
    }
  }

  copyCode(btn: HTMLButtonElement) {
    const code = btn.closest('.code-example')?.querySelector('pre code');
    if (code) this.copyText(code.textContent ?? '', btn);
  }

  copyText(text: string, btn: HTMLElement) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('i') ?? btn;
      const prev = (icon as HTMLElement).className;
      (icon as HTMLElement).className = 'fas fa-check';
      setTimeout(() => { (icon as HTMLElement).className = prev; }, 1800);
    });
  }
}
