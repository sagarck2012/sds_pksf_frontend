import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ShipmentService } from '../service/shipment/shipment.service';

@Component({
  selector: 'app-shipment-receive',
  templateUrl: './shipment-receive.component.html',
  styleUrls: ['./shipment-receive.component.css']
})
export class ShipmentReceiveComponent implements OnInit {
  notifier: NotifierService;
  shipping_code: string;
  user_id: number;

  constructor(
    private shipmentService: ShipmentService,
    private notifierService: NotifierService
  ) {
    this.shipping_code = '';
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    var shipementReceive = {
      user_id: this.user_id,
      shipping_code: this.shipping_code
    }
    this.shipmentService.receiveShipment(shipementReceive).subscribe(data => {
      this.notifier.notify('success', 'Shipment has been received successfully!');
      this.shipping_code = '';
    }, err => {
      console.log(err.error.message);
      this.notifier.notify('error', err.error.message);
      this.shipping_code = '';
    });
  }

}
