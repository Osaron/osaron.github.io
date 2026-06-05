import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { DiagramService } from '../../../core/services/diagram.service';
import { Diagram } from '../../../core/models/diagram.model';

@Component({
  selector: 'app-workflow-diagrams',
  imports: [AsyncPipe],
  templateUrl: './workflow-diagrams.html',
  styleUrl: './workflow-diagrams.scss',
})
export class WorkflowDiagrams {
  private diagramService = inject(DiagramService);
  private router = inject(Router);
  diagrams$ = this.diagramService.getAll();

  open(diagram: Diagram) {
    this.router.navigate(['/projects/workflow-diagrams', diagram.slug]);
  }
}
