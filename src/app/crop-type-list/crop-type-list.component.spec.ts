import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropTypeListComponent } from './crop-type-list.component';

describe('CropTypeListComponent', () => {
  let component: CropTypeListComponent;
  let fixture: ComponentFixture<CropTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
