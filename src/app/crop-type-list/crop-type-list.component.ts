import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CropType } from '../model/cropType/crop-type.model';
import { CropService } from '../service/crop/crop.service';

@Component({
  selector: 'app-crop-type-list',
  templateUrl: './crop-type-list.component.html',
  styleUrls: ['./crop-type-list.component.css']
})
export class CropTypeListComponent implements OnInit {

  cropTypes: CropType[];
  user_id: number;
  crop_id: string;

  constructor(
    private cropService: CropService,
    private activatedRoute: ActivatedRoute) {
    this.cropTypes = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.crop_id = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.crop_id = params['id'];
    });
    this.cropService.getCropTypeList(this.user_id, this.crop_id).subscribe(data => {
      
      this.cropTypes = data.crop_type_list;
      console.log(this.cropTypes)
    }, err => {
      console.log(err);
    });
  }

}
