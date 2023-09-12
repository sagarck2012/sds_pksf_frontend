import { Component, OnInit } from '@angular/core';
import { Crate } from '../model/crate/crate.model';
import { ShipmentService } from '../service/shipment/shipment.service';

@Component({
  selector: 'app-shipment-dialog',
  templateUrl: './shipment-dialog.component.html',
  styleUrls: ['./shipment-dialog.component.css']
})
export class ShipmentDialogComponent implements OnInit {

  shipment: any;
  user_id: number;
  name: string;
  shipping_code: string;
  crateBarcodes: string[];
  crates: Crate[];

  constructor(
    private shipmentService: ShipmentService
  ) {
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.name = localStorage.getItem("name")+ '';
    this.shipping_code = this.shipmentService.shipping_code;
    this.crateBarcodes = [];
    this.crates = [];
  }

  ngOnInit(): void {
    var shipment = {
      user_id: this.user_id,
      shipping_code: this.shipping_code
    };
    this.shipmentService.getShipmentDetail(shipment).subscribe(data => {
      console.log(data);
      this.shipment = data.shipping_info;
      this.crateBarcodes = this.shipment.bar_code;
      this.crates = this.shipment.crating_info;
    }, err =>{
      console.log(err);
    });
  }

  printShipment() {
    window.print();
  }

}
