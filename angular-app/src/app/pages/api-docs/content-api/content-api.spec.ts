import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentApi } from './content-api';

describe('ContentApi', () => {
  let component: ContentApi;
  let fixture: ComponentFixture<ContentApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
