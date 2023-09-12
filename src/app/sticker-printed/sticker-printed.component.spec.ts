import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerPrintedComponent } from './sticker-printed.component';

describe('StickerPrintedComponent', () => {
  let component: StickerPrintedComponent;
  let fixture: ComponentFixture<StickerPrintedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerPrintedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPrintedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
