import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiPageBase } from '../../../../core/services/api-page-base';
import { TocItem } from '../../../../core/services/toc.service';

@Component({
  selector: 'app-meal-db-introduction',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './introduction.html',
})
export class MealDbIntroduction extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'overview',          label: this.lang.t('api.toc.overview')          },
      { id: 'endpoints-glance',  label: this.lang.t('api.mdb.gs.endpoints-title') },
      { id: 'base-url',          label: this.lang.t('api.mdb.gs.base-url-title')  },
      { id: 'typical-response',  label: this.lang.t('api.mdb.gs.response-title')  },
    ];
  }
}
