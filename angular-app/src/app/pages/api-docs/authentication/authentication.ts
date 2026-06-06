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
      { id: 'api-keys',        label: this.lang.t('api.toc.api-keys')        },
      { id: 'request-headers', label: this.lang.t('api.toc.request-headers') },
      { id: 'security',        label: this.lang.t('api.toc.security')        },
    ];
  }

  activeTab = signal('curl-auth');
}
