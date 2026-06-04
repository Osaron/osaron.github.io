import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.scss',
})
export class Videos {
  private sanitizer = inject(DomSanitizer);

  playing = signal(false);

  readonly embedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/LRfRSGTluTM?autoplay=1'
  );

  play() { this.playing.set(true); }
}
