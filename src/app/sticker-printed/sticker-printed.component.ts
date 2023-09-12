import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Crop } from '../model/crop/crop.model';
import { CropType } from '../model/cropType/crop-type.model';
import { Packaging } from '../model/packaging/packaging.model';
import { Sticker } from '../model/sticker/sticker.model';
import { CropService } from '../service/crop/crop.service';
import { PackagingService } from '../service/packaging/packaging.service';
import { StickerService } from '../service/sticker/sticker.service';

@Component({
  selector: 'app-sticker-printed',
  templateUrl: './sticker-printed.component.html',
  styleUrls: ['./sticker-printed.component.css']
})
export class StickerPrintedComponent implements OnInit {

  packagingListForm: FormGroup;
  crops: Crop[];
  cropTypes: CropType[];
  packagingList: Packaging[];
  harvestIdList: number[];
  selectedPackagings: Packaging[];
  user_id: number;
  crop_id: string;
  crop_type_id: string;
  selectedHarvests: number[];
  totalQuantity: number;
  total_no_of_sticker: number;
  packaging_unit: string;
  packaging_unit_per_package: number;
  harvest_id_list: number[];
  processing_id: string;
  sticker_list: Sticker[];
  sticker_id_list: number[];
  emptyTable: boolean;
  dataLoading: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cropService: CropService,
    private packagingService: PackagingService,
    private stickerService: StickerService
  ) {
    this.packagingListForm = this.formBuilder.group({});
    this.crops = [];
    this.cropTypes = [];
    this.packagingList = [];
    this.harvestIdList = [];
    this.selectedPackagings = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.crop_id = '';
    this.crop_type_id = '';
    this.selectedHarvests = [];
    this.totalQuantity = 0;
    this.total_no_of_sticker = 0;
    this.packaging_unit = '';
    this.packaging_unit_per_package = 0;
    this.harvest_id_list = [];
    this.processing_id='';
    this.sticker_list = [];
    this.sticker_id_list = [];
    this.emptyTable = false;
    this.dataLoading =false;
  }

  ngOnInit(): void {
    this.packagingListForm = this.formBuilder.group({
      crop_type_id: ['', Validators.required],
      user_id: [this.user_id, Validators.required],
      status: ['generated', Validators.required]
    });

    this.cropService.getCropList(this.user_id).subscribe(data => {
      this.crops = data.crop_list;
      console.log(this.crops);
    });
  }

  onCropChange(crop_id: string) {
    this.dataLoading = false;
    this.emptyTable =false;
    console.log(crop_id);
    this.cropService.getCropTypeList(this.user_id, crop_id).subscribe(data => {
      console.log(data);
      this.cropTypes = data.crop_type_list;
      console.log(this.cropTypes);
    });
  }



  onCropTypeChange(cropType: string) {
    this.dataLoading = false;
    this.emptyTable =false;
    console.log(cropType);
  }

  onUnitChange(unitType: string) {
    this.packaging_unit = unitType;
    console.log(unitType);
  }

  onPackageChange(unitPerPackage: number) {
    this.packaging_unit_per_package = unitPerPackage;
    console.log(unitPerPackage);
    if (this.totalQuantity > 0) {
      if (this.totalQuantity % unitPerPackage == 0) {
        this.total_no_of_sticker = this.totalQuantity / unitPerPackage;
        console.log('Sticker Count', this.total_no_of_sticker)
      } else {
        this.total_no_of_sticker = 0;
        console.log('Not an acceptable size');

      }
    }
  }

  onSubmit() {
    console.log(this.packagingListForm.value);
    this.emptyTable= false;
    this.dataLoading=true;
    const printedPackagingListObj = this.packagingListForm.value;
    printedPackagingListObj.status = 'printed';
    this.packagingService.getPackagingList(printedPackagingListObj).subscribe(data => {
      console.log('Packages', data);
      this.dataLoading =false;
      if(data.package_list.length === 0){
        this.emptyTable =true;
      } else{
        this.packagingList = data.package_list;
      }
    }, err => {
      console.log(err);
    });
  }

  selectedPackaging(packaging: Packaging) {
    if (this.selectedPackaging.length > 0) {
      this.selectedPackagings.pop();
    }
    this.selectedPackagings.push(packaging);
    console.log(this.selectedPackagings);
  }

  

  generateSticker() {
    var packaging = {
      user_id: this.user_id,
      processing_id: this.processing_id,
      status: 'printed'
    };
    
    this.packagingService.searchSticker(packaging).subscribe(data => {
      this.sticker_list = JSON.parse(JSON.stringify(data)).sticker_list;
      console.log(this.sticker_list);

      this.stickerService.sticker_list = this.sticker_list;
      for(var index = 0; index < this.sticker_list.length; index++) {
        this.sticker_id_list.push(this.sticker_list[index].id);
      }
      var printedPackages = {
        user_id: this.user_id,
        sticker_id_list: '['+this.sticker_id_list+']'
      };
      this.packagingService.printSticker(printedPackages).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
      this.router.navigate(['/sticker/reprint']);
    });
  }

}
