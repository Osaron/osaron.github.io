import { Injectable, signal } from '@angular/core';

export interface TocItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

@Injectable({ providedIn: 'root' })
export class TocService {
  items = signal<TocItem[]>([]);
  activeId = signal<string>('');

  set(items: TocItem[]) {
    this.items.set(items);
    this.activeId.set(items[0]?.id ?? '');
  }

  setActive(id: string) {
    this.activeId.set(id);
  }
}
