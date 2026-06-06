import { Component, inject } from '@angular/core';
import { TocService } from '../../../core/services/toc.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-toc',
  imports: [],
  templateUrl: './toc.html',
  styleUrl: './toc.scss',
})
export class Toc {
  tocService = inject(TocService);
  lang = inject(LanguageService);

  scrollTo(id: string, event: MouseEvent): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
