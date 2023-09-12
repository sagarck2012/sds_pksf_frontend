import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Crop } from '../model/crop/crop.model';
import { CropType } from '../model/cropType/crop-type.model';
import { Harvesting } from '../model/harvesting/harvesting.model';
import { CropService } from '../service/crop/crop.service';
import { PackagingService } from '../service/packaging/packaging.service';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.css']
})
export class PackagingComponent implements OnInit {

  harvestingListForm: FormGroup;
  crops: Crop[];
  cropTypes: CropType[];
  harvestingList: Harvesting[];
  harvestIdList: number[];
  selectedHarvestings: Harvesting[];
  user_id: number;
  crop_id: string;
  crop_type_id: string;
  selectedHarvests: number[];
  totalQuantity: number;
  total_no_of_sticker: number;
  // packaging: Packaging;
  packaging_unit: string;
  packaging_unit_per_package: number;
  harvest_id_list: number[];
  pieceUnits: number[];
  weightUnits: number[];
  units: number[];
  dataLoading: boolean;
  emptyTable: boolean;
  notifier: NotifierService;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cropService: CropService,
    private packagingService: PackagingService,
    private notifierService: NotifierService
  ) {
    this.harvestingListForm = this.formBuilder.group({});
    this.crops = [];
    this.cropTypes = [];
    this.harvestingList = [];
    this.harvestIdList = [];
    this.selectedHarvestings = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.crop_id = '';
    this.crop_type_id = '';
    this.selectedHarvests = [];
    this.totalQuantity = 0;
    this.total_no_of_sticker = 0;
    this.packaging_unit = '';
    this.packaging_unit_per_package = 0;
    this.harvest_id_list = [];
    this.pieceUnits = [1, 2, 3, 4, 5];
    this.weightUnits = [1, 2, 3, 4, 5];
    this.units = [];
    this.dataLoading = false;
    this.emptyTable = false;
    this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    this.harvestingListForm = this.formBuilder.group({
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      crop_type_id: ['', Validators.required],
      user_id: [this.user_id, Validators.required]
    });

    this.cropService.getCropList(this.user_id).subscribe(data => {
      this.crops = data.crop_list;
      console.log(this.crops);
    });
  }

  onCropChange(crop_id: string) {
    this.emptyTable = false;
    this.dataLoading = false;
    console.log(crop_id);
    this.cropService.getCropTypeList(this.user_id, crop_id).subscribe(data => {
      console.log(data);
      this.cropTypes = data.crop_type_list;
      console.log(this.cropTypes);
    });
  }



  onCropTypeChange(cropType: string) {
    this.dataLoading =false;
    this.emptyTable =false;
    console.log(cropType);
  }

  onUnitChange(unitType: string) {
    if(unitType === 'kg') {
      this.units = this.weightUnits;
    }
    if(unitType === 'piece') {
      this.units = this.pieceUnits
    }
    this.packaging_unit = unitType;
    console.log(unitType);
  }

  onPackageChange(unitPerPackage: number) {
    this.packaging_unit_per_package = unitPerPackage;
    console.log(unitPerPackage);
    if (this.totalQuantity > 0) {
      if (this.totalQuantity % unitPerPackage == 0) {
        this.total_no_of_sticker = this.totalQuantity / unitPerPackage;
        console.log('Sticker Count', this.total_no_of_sticker);
      } else {
        this.total_no_of_sticker = 0;
        console.log('Not an acceptable size');
        this.notifier.notify('warning', 'Not an acceptable size!');

      }
    }
  }

  onSubmit() {
    console.log(this.harvestingListForm.value);
    this.emptyTable =false;
    this.dataLoading = true;
    this.packagingService.getHarvestingList(this.harvestingListForm.value).subscribe(data => {
      console.log('Harvest', data.harvest_list);
      this.dataLoading =false;
      if(data.harvest_list.length === 0 ) {
        this.emptyTable =true;
      } else{
        this.harvestingList = data.harvest_list;
      }
      
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message);
    });
  }

  selectedHarvesting(harvesting: Harvesting) {
    let index = this.selectedHarvestings.indexOf(harvesting);
    if (index == -1) {
      this.totalQuantity = parseInt(this.totalQuantity + '') + parseInt(harvesting.quantity + '');
      this.selectedHarvestings.push(harvesting);
    } else {
      this.totalQuantity = parseInt(this.totalQuantity + '') - parseInt(harvesting.quantity + '');
      this.selectedHarvestings.splice(index, 1);
    }
    console.log(this.selectedHarvestings);
  }

  generateSticker() {
    for (var i = 0; i < this.selectedHarvesting.length; i++) {
      this.harvest_id_list[i] = this.selectedHarvestings[i].id;
    }
    var packaging = {
      packaging_unit : this.packaging_unit,
      packaging_unit_per_package : this.packaging_unit_per_package,
      total_no_of_sticker : this.total_no_of_sticker,
      user_id : this.user_id,
      harvest_id_list : JSON.stringify(this.harvest_id_list)
  };
    this.packagingService.addPackaging(packaging).subscribe(data => {
      this.notifier.notify('success', 'Packaging has been completed!');
      console.log(data);
      this.router.navigate(['/packaging/search']);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message);
    });
  }
}
