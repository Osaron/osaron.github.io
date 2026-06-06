import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-quick-start',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quick-start.html',
})
export class QuickStart extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'quotable-api', label: this.lang.t('api.toc.quotable-api') },
      { id: 'meal-db-api',  label: this.lang.t('api.toc.meal-db-api')  },
      { id: 'how-to-use',   label: this.lang.t('api.toc.how-to-use')   },
    ];
  }
}
