import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePapers } from './white-papers';

describe('WhitePapers', () => {
  let component: WhitePapers;
  let fixture: ComponentFixture<WhitePapers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitePapers],
    }).compileComponents();

    fixture = TestBed.createComponent(WhitePapers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
