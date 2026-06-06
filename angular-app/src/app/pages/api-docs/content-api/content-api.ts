import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../core/services/api-page-base';
import { TocItem } from '../../../core/services/toc.service';

@Component({
  selector: 'app-content-api',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-api.html',
})
export class ContentApi extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'list-content',   label: this.lang.t('api.toc.list-content')   },
      { id: 'create-content', label: this.lang.t('api.toc.create-content') },
      { id: 'update-content', label: this.lang.t('api.toc.update-content') },
      { id: 'delete-content', label: this.lang.t('api.toc.delete-content') },
    ];
  }
}
