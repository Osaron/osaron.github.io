import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { WhitePaperService } from '../../../core/services/white-paper.service';
import { WhitePaper } from '../../../core/models/white-paper.model';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-white-papers',
  imports: [AsyncPipe],
  templateUrl: './white-papers.html',
  styleUrl: './white-papers.scss',
})
export class WhitePapers {
  lang = inject(LanguageService);
  private service = inject(WhitePaperService);
  papers$ = this.service.getAll();

  download(paper: WhitePaper) {
    if (paper.pdfPath) window.open(paper.pdfPath, '_blank', 'noopener');
    else if (paper.link) window.open(paper.link, '_blank', 'noopener');
  }
}
