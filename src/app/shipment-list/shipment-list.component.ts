import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShipmentService } from '../service/shipment/shipment.service';
import { ShipmentDialogComponent } from '../shipment-dialog/shipment-dialog.component';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})
export class ShipmentListComponent implements OnInit {

  user_id: number;
  shipments: any[];
  filteredShipments: any[];
  page: number;
  pageSize: number;

  // sortedData: Shipment[];

  constructor(
    private dialog: MatDialog,
    private shipmentService: ShipmentService
  ) {
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.shipments = [];
    this.filteredShipments = [];
    // this.sortedData =[];
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit(): void {
    this.shipmentService.getShipmentList(this.user_id).subscribe(data => {
      console.log(data);
      this.shipments = data;
      this.filteredShipments = this.shipments;
      // this.sortedData = this.shipments.slice();
    }, err => {
      console.log(err);
    });
  }

  onShipmentStatusChange(status: string) {
    console.log(status);
    if (status === '') {
      this.filteredShipments = this.shipments;
    } else {
      this.filteredShipments = this.shipments.filter(item => item.status === status);
      console.log(this.filteredShipments);
    }
  }

  // sortData(sort: Sort) {
  //   const data = this.shipments.slice();
  //   if(!sort.active || sort.direction ==='') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a,b) =>{
  //     const isAsc = sort.direction ==='asc';
  //     switch (sort.active) {
  //       case 'shipping_datetime': return compare(a.shipping_datetime, b.shipping_datetime, isAsc);
  //       case 'shipping_code': return compare(a.shipping_code, b.shipping_code, isAsc);
  //       case 'destination_address': return compare(a.destination_address, b.destination_address, isAsc);
  //       case 'destination_contact': return compare(a.destination_contact, b.destination_contact, isAsc);
  //       case 'shipping_agent': return compare(a.shipping_agent, b.shipping_agent, isAsc);
  //       case 'shipping_contact': return compare(a.shipping_contact, b.shipping_contact, isAsc);
  //       case 'total_no_of_crate': return compare(a.total_no_of_crate, b.total_no_of_crate, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }

  openDialog(shipping_code: string){
    this.shipmentService.shipping_code = shipping_code;
    this.dialog.open(ShipmentDialogComponent, {height: '500px'});
  }
}

// function compare (a: number | string, b: number | string, isAsc: boolean){
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }