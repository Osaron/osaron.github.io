import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  playing: WritableSignal<boolean>;
  embedUrl: SafeResourceUrl;
  thumbnail?: string;
}

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.scss',
})
export class Videos {
  private sanitizer = inject(DomSanitizer);

  videos: VideoCard[] = [
    {
      id: 'LRfRSGTluTM',
      tag: 'User Guide',
      title: 'Geome User Guide — Walkthrough',
      description: 'A complete walkthrough of the Geome software user guide, covering key workflows, navigation, and documentation structure.',
      playing: signal(false),
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/LRfRSGTluTM?autoplay=1'),
    },
    {
      id: '4JE0QlHdyR0',
      tag: 'Tutorial',
      title: 'Deck Family Farm — Account Setup',
      description: 'Step-by-step walkthrough of the account setup process for Deck Family Farm.',
      playing: signal(false),
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4JE0QlHdyR0?autoplay=1'),
      thumbnail: 'images/videos/deck-family-farm-thumbnail.png',
    },
  ];
}
