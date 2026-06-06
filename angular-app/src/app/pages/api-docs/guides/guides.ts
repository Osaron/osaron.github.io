import { Component } from '@angular/core';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [],
  templateUrl: './guides.html',
})
export class Guides extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'testing-overview', label: this.lang.t('api.toc.overview')       },
      { id: 'load-testing',     label: this.lang.t('api.toc.load-testing')   },
      { id: 'api-automation',   label: this.lang.t('api.toc.api-automation') },
      { id: 'ui-automation',    label: this.lang.t('api.toc.ui-automation')  },
      { id: 'mobile-testing',   label: this.lang.t('api.toc.mobile-testing') },
      { id: 'bdd-cucumber',     label: this.lang.t('api.toc.bdd-cucumber')   },
      { id: 'languages',        label: this.lang.t('api.toc.languages')      },
      { id: 'best-practices',   label: this.lang.t('api.toc.best-practices') },
      { id: 'troubleshooting',  label: this.lang.t('api.toc.troubleshooting'), children: [
        { id: 'common-issues',     label: this.lang.t('api.toc.common-issues')   },
        { id: 'debugging-tips',    label: this.lang.t('api.toc.debugging-tips')  },
        { id: 'support-resources', label: this.lang.t('api.toc.support')         },
      ]},
    ];
  }
}
