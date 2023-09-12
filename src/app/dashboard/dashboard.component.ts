import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Vegetable } from '../model/vegetable/vegetable.model';
import { DashboardService } from '../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registered_farmer: number;
  registered_land_owner: number;
  registered_land: number;
  land_prepared: number;
  total_crated: number;
  total_shipment: number;
  total_harvested_crop_in_kg: number;
  cultivated_items: number;
  vegetable_list: Vegetable[];
  user_id: number;
  sortedData: Vegetable[];

  constructor(
    private dashboardService: DashboardService
  ) {
    this.registered_farmer = 0;
    this.registered_land_owner = 0;
    this.registered_land = 0;
    this.land_prepared = 0;
    this.total_crated = 0;
    this.total_shipment = 0;
    this.total_harvested_crop_in_kg = 0;
    this.cultivated_items = 0;
    this.vegetable_list = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.sortedData = [];
  }

  ngOnInit(): void {
    this.dashboardService.getSummaryData(this.user_id).subscribe(data => {
      console.log(data);
      this.registered_farmer = data.registered_farmer;
      this.registered_land_owner = data.registered_land_owner;
      this.registered_land = data.registered_land;
      this.land_prepared = data.land_prepared;
      this.total_crated = data.total_crated;
      this.total_shipment = data.total_shipment;
      this.total_harvested_crop_in_kg = data.total_harvested_crop_in_kg;
      this.cultivated_items = data.cultivated_items;
      this.vegetable_list = data.vegetable_list;
      this.sortedData = this.vegetable_list.slice();
    }, err => {
      console.log(err);
    });

    
  }

  sortData(sort: Sort) {
    const data = this.vegetable_list.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'crop_name': return compare(a.crop_name, b.crop_name, isAsc);
        case 'photo': return compare(a.crop_name, b.crop_name, isAsc);
        case 'eng_name': return compare(a.eng_name, b.eng_name, isAsc);
        case 'local_name': return compare(a.local_name, b.local_name, isAsc);
        case 'quantity': return compare(a.quantity, b.quantity, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
