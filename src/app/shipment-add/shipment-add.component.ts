import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { District } from '../model/district/district.model';
import { Division } from '../model/division/division.model';
import { Upazila } from '../model/upazila/upazila.model';
import { ShipmentService } from '../service/shipment/shipment.service';
import { ShipmentDialogComponent } from '../shipment-dialog/shipment-dialog.component';

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.css']
})
export class ShipmentAddComponent implements OnInit {

  shipmentAddForm: FormGroup;
  user_id: number;
  divisions: Division[];
  districts: District[];
  upazilas: Upazila[];
  division_id: number;
  district_id: number;
  upazila_id: number;
  crateBarcodes: string[];
  crateBarcode: string;
  message: string;
  notifier: NotifierService;
  checked: boolean;

  constructor(
    private shipmentService: ShipmentService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private notifierService: NotifierService
  ) {
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.shipmentAddForm = this.formBuilder.group({});
    this.divisions = [];
    this.districts = [];
    this.upazilas = [];
    this.division_id = 0;
    this.district_id = 0;
    this.upazila_id = 0;
    this.crateBarcodes = [];
    this.crateBarcode = '';
    this.message = '';
    this.notifier = this.notifierService;
    this.checked = false;
  }

  ngOnInit(): void {
    this.shipmentAddForm = this.formBuilder.group({
      expected_shipping_datetime: ['', Validators.required],
      expected_arrival_datetime: ['', Validators.required],
      destination_district: ['', Validators.required],
      destination_upazila: ['', Validators.required],
      destination_address: ['', Validators.required],
      destination_contact: ['', Validators.required],
      shipping_agent: ['', Validators.required],
      shipping_contact: ['', Validators.required],
      crateBarcode: ['']
    });

    this.shipmentService.getDivisionList(this.user_id).subscribe(data => {
      this.divisions = data.division_list;
    });
  }

  onDivisionChange(division_id: number) {
    console.log(division_id);
    this.division_id = division_id;
    var division = {
      user_id: this.user_id,
      division_id: this.division_id
    };
    this.shipmentService.getDistrictList(division).subscribe(data => {
      this.districts = data.district_list;
      console.log(this.districts);
    });

  }

  onDistrictChange(district_id: number) {
    console.log(district_id);
    const district = {
      user_id: this.user_id,
      district_id: district_id
    };
    this.shipmentService.getUpazilaList(district).subscribe(data => {
      this.upazilas = data.upazila_list;
    });
  }

  onUpazilaChange(upazila_id: number) {
    console.log(upazila_id);
  }

  addCrate(newValue: string) {
    if (newValue.length === 13) {
      console.log('Barcode', this.shipmentAddForm.value);
      const index = this.crateBarcodes.indexOf(this.crateBarcode);
      if (index == -1) {
        this.crateBarcodes.push(this.crateBarcode);
      } else {
        console.log("Already added");
        this.notifier.notify('warning', 'Crate already has been added!');
      }
      this.crateBarcode = "";
      newValue = "";
    }
  }

  removeCrate(crateBarcode: string) {
    console.log(crateBarcode);
    const index = this.crateBarcodes.indexOf(crateBarcode);
    if (index > -1) {
      this.crateBarcodes.splice(index, 1);
    }
  }

  openDialog(shipping_code: string) {
    this.shipmentService.shipping_code = shipping_code;
    this.dialog.open(ShipmentDialogComponent, {height: '500px'});
  }

  onCheckboxStatusChange(checked:boolean){
    console.log('Hi', checked);
    this.checked = checked;
  }

  onSubmit() {
    delete this.shipmentAddForm.value.crateBarcode;
    const shipmentAddObj = this.shipmentAddForm.value;
    shipmentAddObj.user_id = this.user_id;
    shipmentAddObj.bar_code = this.crateBarcodes;
    this.shipmentService.addShipment(shipmentAddObj).subscribe(data => {
      this.notifier.notify('success', 'Shipment has been added!');
      console.log(data);
      this.shipmentAddForm = this.formBuilder.group({});
      this.crateBarcodes = [];
      this.openDialog(data.shipping_code);
    }, err => {
      console.log(err.error.message);
      this.notifier.notify('error', err.error.message);
    });
  }
}
