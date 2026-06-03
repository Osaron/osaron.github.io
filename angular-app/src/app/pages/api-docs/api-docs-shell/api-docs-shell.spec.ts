import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocsShell } from './api-docs-shell';

describe('ApiDocsShell', () => {
  let component: ApiDocsShell;
  let fixture: ComponentFixture<ApiDocsShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDocsShell],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDocsShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
