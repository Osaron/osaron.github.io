import { Component, inject, signal, effect } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  lang   = inject(LanguageService);
  router = inject(Router);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => (e as NavigationEnd).url)
    ),
    { initialValue: this.router.url }
  );

  apiDocsOpen  = signal(false);
  quoteApiOpen = signal(false);
  mealDbOpen   = signal(false);

  constructor() {
    effect(() => {
      const url = this.currentUrl();
      if (url.includes('/quote-api/') || url.includes('/meal-db/')) {
        this.apiDocsOpen.set(true);
      }
      if (url.includes('/quote-api/')) this.quoteApiOpen.set(true);
      if (url.includes('/meal-db/'))   this.mealDbOpen.set(true);
    });
  }

  toggleApiDocs()  { this.apiDocsOpen.update(v => !v);  }
  toggleQuoteApi() { this.quoteApiOpen.update(v => !v); }
  toggleMealDb()   { this.mealDbOpen.update(v => !v);   }

  printPage() { window.print(); }
}
