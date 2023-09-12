import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Vegetable } from '../model/vegetable/vegetable.model';
import { CropService } from '../service/crop/crop.service';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {

  user_id: number;
  vegetable_list: Vegetable[];
  sortedData: Vegetable[];

  constructor(
    private cropService: CropService
  ) {
    this.user_id = parseInt(localStorage.getItem('user_id') + '');
    this.vegetable_list = [];
    this.sortedData = [];
  }

  ngOnInit(): void {
    this.cropService.getVegetableList(this.user_id).subscribe(data => {
      console.log(data);
      this.vegetable_list = data.vegetable_list;
      this.sortedData = this.vegetable_list.slice();
    }, err=> {
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
