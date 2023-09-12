import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingStickerComponent } from './packaging-sticker.component';

describe('PackagingStickerComponent', () => {
  let component: PackagingStickerComponent;
  let fixture: ComponentFixture<PackagingStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
