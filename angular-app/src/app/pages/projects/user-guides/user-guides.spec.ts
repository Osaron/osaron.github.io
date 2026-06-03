import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGuides } from './user-guides';

describe('UserGuides', () => {
  let component: UserGuides;
  let fixture: ComponentFixture<UserGuides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGuides],
    }).compileComponents();

    fixture = TestBed.createComponent(UserGuides);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
