import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

interface NavPage {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  lang = inject(LanguageService);

  readonly pages = computed<NavPage[]>(() => [
    { label: this.lang.t('api.nav.getting-started'), route: 'getting-started' },
    { label: this.lang.t('api.nav.authentication'),  route: 'authentication'  },
    { label: this.lang.t('api.nav.api-reference'),   route: 'api-reference'   },
    { label: this.lang.t('api.nav.content-api'),     route: 'content-api'     },
    { label: this.lang.t('api.nav.guides'),          route: 'guides'          },
    { label: this.lang.t('api.nav.resources'),       route: 'resources'       },
  ]);

  printPage() {
    window.print();
  }
}
