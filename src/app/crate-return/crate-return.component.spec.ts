import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateReturnComponent } from './crate-return.component';

describe('CrateReturnComponent', () => {
  let component: CrateReturnComponent;
  let fixture: ComponentFixture<CrateReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
