import { Component, inject } from '@angular/core';
import { TocService } from '../../../core/services/toc.service';

@Component({
  selector: 'app-toc',
  imports: [],
  templateUrl: './toc.html',
  styleUrl: './toc.scss',
})
export class Toc {
  tocService = inject(TocService);

  scrollTo(id: string, event: MouseEvent): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
