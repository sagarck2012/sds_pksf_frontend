import { Component, OnInit } from '@angular/core';
import { Crop } from '../model/crop/crop.model';
import { CropService } from '../service/crop/crop.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  user_id: number;
  crops: Crop[];

  constructor(private cropService: CropService) {
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.crops = [];
  }

  ngOnInit(): void {
    this.cropService.getCropList(this.user_id).subscribe(data => {
      console.log(data);
      this.crops = data.crop_list;
    });
  }

}
