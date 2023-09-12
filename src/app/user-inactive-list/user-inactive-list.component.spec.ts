import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInactiveListComponent } from './user-inactive-list.component';

describe('UserInactiveListComponent', () => {
  let component: UserInactiveListComponent;
  let fixture: ComponentFixture<UserInactiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInactiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInactiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
