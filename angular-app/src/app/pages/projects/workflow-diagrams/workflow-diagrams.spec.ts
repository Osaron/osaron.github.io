import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDiagrams } from './workflow-diagrams';

describe('WorkflowDiagrams', () => {
  let component: WorkflowDiagrams;
  let fixture: ComponentFixture<WorkflowDiagrams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowDiagrams],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkflowDiagrams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
