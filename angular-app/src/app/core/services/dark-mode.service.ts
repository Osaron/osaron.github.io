import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private doc = inject(DOCUMENT);
  private _dark = signal<boolean>(
    typeof localStorage !== 'undefined' && localStorage.getItem('darkMode') === 'true'
  );

  isDark = this._dark.asReadonly();
  iconClass = computed(() => this._dark() ? 'fas fa-sun' : 'fas fa-moon');

  constructor() {
    effect(() => {
      this._dark()
        ? this.doc.body.classList.add('dark-mode')
        : this.doc.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', String(this._dark()));
    });
  }

  toggle() {
    this._dark.update(v => !v);
  }
}
