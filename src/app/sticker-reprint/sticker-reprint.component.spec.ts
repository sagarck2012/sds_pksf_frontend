import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerReprintComponent } from './sticker-reprint.component';

describe('StickerReprintComponent', () => {
  let component: StickerReprintComponent;
  let fixture: ComponentFixture<StickerReprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerReprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
