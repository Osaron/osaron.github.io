import { Component, computed, signal } from '@angular/core';
import { ApiPageBase } from '../../../../core/services/api-page-base';
import { TocItem } from '../../../../core/services/toc.service';

interface Ingredient { name: string; measure: string; }

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  [key: string]: string | null;
}

@Component({
  selector: 'app-meal-db-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.html',
})
export class MealDbDemo extends ApiPageBase {
  protected getTocItems(): TocItem[] {
    return [
      { id: 'live-meal-demo', label: this.lang.t('api.toc.live-meal-demo') },
      { id: 'quick-start',    label: this.lang.t('api.toc.quick-start')    },
      { id: 'external-links', label: this.lang.t('api.toc.external-links') },
    ];
  }

  readonly BASE = 'https://www.themealdb.com/api/json/v1/1/';

  searchInput = signal('');
  meal        = signal<Meal | null>(null);
  loading     = signal(false);
  error       = signal<string | null>(null);
  activeTab   = signal('js-demo');
  lastUrl     = signal('');

  ingredients = computed<Ingredient[]>(() => {
    const m = this.meal();
    if (!m) return [];
    return Array.from({ length: 20 }, (_, i) => i + 1)
      .map(n => ({ name: (m[`strIngredient${n}`] ?? '').trim(), measure: (m[`strMeasure${n}`] ?? '').trim() }))
      .filter(item => item.name);
  });

  tags = computed<string[]>(() => {
    const t = this.meal()?.strTags;
    return t ? t.split(',').map(s => s.trim()).filter(Boolean) : [];
  });

  mealJson = computed(() => {
    const m = this.meal();
    return m ? JSON.stringify(m, null, 2) : '';
  });

  async searchMeal(): Promise<void> {
    const q = this.searchInput().trim();
    if (!q) return;
    const url = `${this.BASE}search.php?s=${encodeURIComponent(q)}`;
    await this._fetch(url);
  }

  async randomMeal(): Promise<void> {
    const url = `${this.BASE}random.php`;
    await this._fetch(url);
  }

  private async _fetch(url: string): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    this.meal.set(null);
    this.lastUrl.set(url);
    try {
      const res = await fetch(url);
      if (!res.ok) { this.error.set(this.lang.t('api.mdb.demo.error.generic')); return; }
      const data = await res.json();
      if (!data.meals) { this.error.set(this.lang.t('api.mdb.demo.error.not-found')); return; }
      this.meal.set(data.meals[0]);
    } catch {
      this.error.set(navigator.onLine
        ? this.lang.t('api.mdb.demo.error.unreachable')
        : this.lang.t('api.mdb.demo.error.network'));
    } finally {
      this.loading.set(false);
    }
  }

  copyCode(btn: HTMLButtonElement) {
    const code = btn.closest('.code-example')?.querySelector('pre code');
    if (code) this._copy(code.textContent ?? '', btn);
  }

  copyText(text: string, btn: HTMLElement) {
    this._copy(text, btn);
  }

  private _copy(text: string, btn: HTMLElement) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = btn.querySelector('i') ?? btn;
      const prev = (icon as HTMLElement).className;
      (icon as HTMLElement).className = 'fas fa-check';
      setTimeout(() => { (icon as HTMLElement).className = prev; }, 1800);
    });
  }
}
