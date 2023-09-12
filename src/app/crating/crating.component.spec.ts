import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CratingComponent } from './crating.component';

describe('CratingComponent', () => {
  let component: CratingComponent;
  let fixture: ComponentFixture<CratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
