import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DiagramService } from '../../../../core/services/diagram.service';
import { Diagram } from '../../../../core/models/diagram.model';

@Component({
  selector: 'app-diagram-detail',
  imports: [RouterLink],
  templateUrl: './diagram-detail.html',
  styleUrl: './diagram-detail.scss',
})
export class DiagramDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private diagramService = inject(DiagramService);

  diagram = signal<Diagram | null>(null);

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.diagramService.getAll().subscribe(diagrams => {
      this.diagram.set(diagrams.find(d => d.slug === slug) ?? null);
    });
  }

  get problemParagraphs(): string[] {
    return this.diagram()?.problem?.split('\n\n') ?? [];
  }

  tagIcon(tag: string): string {
    const icons: Record<string, string> = {
      'draw.io': 'fa-solid fa-pen-ruler',
      'Visual Paradigm': 'fa-solid fa-diagram-project',
    };
    return icons[tag] ?? 'fa-solid fa-hashtag';
  }
}
