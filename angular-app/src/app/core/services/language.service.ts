import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../translations/translations';

export type Lang = 'en' | 'es';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('en');

  toggle(): void {
    this.lang.set(this.lang() === 'en' ? 'es' : 'en');
  }

  t(key: string): string {
    return TRANSLATIONS[key]?.[this.lang()] ?? key;
  }
}
