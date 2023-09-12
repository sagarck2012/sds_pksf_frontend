import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagingService } from '../service/packaging/packaging.service';

@Component({
  selector: 'app-packaging-detail',
  templateUrl: './packaging-detail.component.html',
  styleUrls: ['./packaging-detail.component.css']
})
export class PackagingDetailComponent implements OnInit {

  general_info: any;
  product_eng_name: string;
  net_weight: string;
  origin_address: string;
  product_packaging_date: string;
  more_details_page: string;

  planting_info: any;
  planted_by: string;
  planting_date: string;

  processing_info: any;
  packaged_by: string;
  packaging_date: string;

  shipping_info: any;
  shipped_by: string;
  shipping_date: string;

  shop_info: any;
  received_by: string;
  receiving_date_by_shop_owner: string;

  receiving_info: any;
  receiving_date_by_customer: string;

  harvest_id: number;
  bar_code: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private packagingService: PackagingService
  ) {
    this.harvest_id = 0;
    this.bar_code = '';
    this.product_eng_name = '';
    this.net_weight = '';
    this.origin_address = '';
    this.product_packaging_date = '';
    this.more_details_page = '';

    this.planted_by = '';
    this.planting_date = '';

    this.packaged_by = '';
    this.packaging_date = '';

    this.shipped_by = '';
    this.shipping_date = '';

    this.received_by = '';
    this.receiving_date_by_shop_owner = '';

    this.receiving_date_by_customer = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.harvest_id = params['harvest_id'];
      this.bar_code = params['bar_code'];
    });

    var packaging = {
      harvest_id: parseInt(this.harvest_id+''),
      bar_code: this.bar_code
    }
    this.packagingService.getPackagingDetail(packaging).subscribe(data => {
      console.log(data);
      this.general_info = data.general_info;
      this.product_eng_name = this.general_info.product_eng_name;
      this.net_weight = this.general_info.net_weight;
      this.origin_address = this.general_info.origin_address;
      this.product_packaging_date = this.general_info.packaging_date;
      this.more_details_page = this.more_details_page;

      this.planting_info = data.planting_info;
      this.planted_by = this.planting_info.planted_by;
      this.planting_date = this.planting_info.planting_date;

      this.processing_info = data.processing_info;
      this.packaged_by = this.processing_info.packaged_by;
      this.packaging_date = this.processing_info.packaging_date;

      this.shipping_info = data.shipping_info;
      this.shipped_by = this.shipping_info.shipped_by;
      this.shipping_date = this.shipping_info.shipping_date;

      this.shop_info = data.shop_info;
      this.received_by = this.shop_info.received_by;
      this.receiving_date_by_shop_owner = this.shop_info.receiving_date_by_shop_owner

      this.receiving_info = data.receiving_info;
      this.receiving_date_by_customer = this.receiving_info.receiving_date_by_customer;

      console.log('Received', this.receiving_date_by_customer);
      
    }, err => {
      console.log(err);
    });

  }

}
