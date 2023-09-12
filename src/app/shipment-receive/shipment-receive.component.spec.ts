import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentReceiveComponent } from './shipment-receive.component';

describe('ShipmentReceiveComponent', () => {
  let component: ShipmentReceiveComponent;
  let fixture: ComponentFixture<ShipmentReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentReceiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
