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
  protected tocItems: TocItem[] = [
    { id: 'api-keys',        label: 'API Keys' },
    { id: 'request-headers', label: 'Request Headers' },
    { id: 'security',        label: 'Security' },
  ];

  activeTab = signal('curl-auth');
}
