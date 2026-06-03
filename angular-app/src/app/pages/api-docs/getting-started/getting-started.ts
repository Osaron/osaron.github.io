import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './getting-started.html',
})
export class GettingStarted extends ApiPageBase {
  protected tocItems: TocItem[] = [
    { id: 'overview',               label: 'Overview' },
    { id: 'authentication-summary', label: 'Authentication' },
    { id: 'first-request',          label: 'First request' },
    { id: 'response-shape',         label: 'Response shape' },
    { id: 'next-steps',             label: 'Next steps' },
  ];

  copyUrl(text: string, btn: HTMLButtonElement) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('i')!;
      const prev = icon.className;
      icon.className = 'fas fa-check';
      setTimeout(() => { icon.className = prev; }, 1800);
    });
  }

  copyCode(btn: HTMLButtonElement) {
    const code = btn.closest('.code-example')?.querySelector('pre code');
    if (code) this.copyUrl(code.textContent ?? '', btn);
  }
}
