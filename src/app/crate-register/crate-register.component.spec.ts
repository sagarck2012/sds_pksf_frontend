import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateRegisterComponent } from './crate-register.component';

describe('CrateRegisterComponent', () => {
  let component: CrateRegisterComponent;
  let fixture: ComponentFixture<CrateRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
