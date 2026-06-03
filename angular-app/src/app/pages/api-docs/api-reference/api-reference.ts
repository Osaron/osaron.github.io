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
  protected tocItems: TocItem[] = [
    { id: 'overview',    label: 'Overview', children: [{ id: 'base-url', label: 'Base URL' }, { id: 'endpoint-overview', label: 'Endpoint Overview' }] },
    { id: 'error-codes', label: 'Error Codes' },
  ];

  copyUrl(text: string, btn: HTMLButtonElement) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('i')!;
      const prev = icon.className;
      icon.className = 'fas fa-check';
      setTimeout(() => { icon.className = prev; }, 1800);
    });
  }
}
