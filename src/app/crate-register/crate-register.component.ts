import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ProductionHouse } from '../model/production-house/production-house.model';
import { CrateService } from '../service/crate/crate.service';
import { ProductionHouseService } from '../service/production-house/production-house.service';

@Component({
  selector: 'app-crate-register',
  templateUrl: './crate-register.component.html',
  styleUrls: ['./crate-register.component.css']
})
export class CrateRegisterComponent implements OnInit {

  crateRegisterForm: FormGroup;
  user_id: number;
  productionHouses: ProductionHouse[];
  notifier: NotifierService;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productionHouseService: ProductionHouseService,
    private crateService: CrateService,
    private notifierService: NotifierService
  ) {
    this.crateRegisterForm = this.formBuilder.group({});
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.productionHouses = [];
    this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    this.crateRegisterForm = this.formBuilder.group({
      net_volume: ['', Validators.required],
      production_house: ['', Validators.required],
      user_id: [this.user_id, Validators.required]

    });
    this.productionHouseService.getProductionHouseList(this.user_id).subscribe(data => {

      this.productionHouses = data.production_house_list;
      console.log(this.productionHouses);
    });
  }

  onProductionHouseChange(id: string) {
    console.log('ID: ', id);
  }

  onSubmit() {
    console.log(this.crateRegisterForm.value);
    this.crateService.registerCrate(this.crateRegisterForm.value).subscribe(data => {
      this.notifier.notify('success', 'Crate has been registered!');
      console.log(data.barcode);
      this.crateService.crate_barcode = data.barcode;
      this.router.navigate(['/crate/sticker']);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.net_volume);
    });
  }

}