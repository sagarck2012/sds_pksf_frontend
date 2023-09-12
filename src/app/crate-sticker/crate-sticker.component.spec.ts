import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateStickerComponent } from './crate-sticker.component';

describe('CrateStickerComponent', () => {
  let component: CrateStickerComponent;
  let fixture: ComponentFixture<CrateStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
