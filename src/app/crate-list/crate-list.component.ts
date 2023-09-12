import { Component, OnInit } from '@angular/core';
import { Crate } from '../model/crate/crate.model';
import { CrateService } from '../service/crate/crate.service';
// import { Sort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crate-list',
  templateUrl: './crate-list.component.html',
  styleUrls: ['./crate-list.component.css']
})
export class CrateListComponent implements OnInit {

  page: number;
  pageSize: number;
  crateList: Crate[];
  user_id: number;
  // sortedData: Crate[];
  filteredCrates: Crate[];
  // displayedColumns: string[] = ['crate_no', 'bar_code', 'net_volume', 'production_house', 'registration_datetime', 'status'];
  // dataSource: Crate [];

  constructor(private crateService: CrateService) {
    this.crateList = [];
    this.user_id = this.user_id = parseInt(localStorage.getItem("user_id") + "");
    // this.sortedData = [];
    this.filteredCrates = [];
    // this.dataSource = this.filteredCrates;
    this.page = 1;
    this.pageSize = 15;
  }

  ngOnInit(): void {
    this.crateService.crateList(this.user_id).subscribe(data => {
      console.log(data);
      this.crateList = data;
      this.filteredCrates = this.crateList;
      // this.dataSource = this.filteredCrates;
      // this.sortedData = this.filteredCrates.slice();
    }, err => {
      console.log(err);
    }
    );
  }

  onCrateStatusChange(status: string) {
    console.log(status);
    if (status === '') {
      this.filteredCrates = this.crateList;
    } else {
      this.filteredCrates = this.crateList.filter(item => item.status === status);
      console.log(this.filteredCrates);
    }
  }

  // sortData(sort: Sort) {
  //   const data = this.filteredCrates.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'crate_no': return compare(a.crate_no, b.crate_no, isAsc);
  //       case 'bar_code': return compare(a.bar_code, b.bar_code, isAsc);
  //       case 'net_volume': return compare(a.net_volume, b.net_volume, isAsc);
  //       case 'status': return compare(a.status, b.status, isAsc);
  //       case 'production_house': return compare(a.production_house, b.production_house, isAsc);
  //       case 'registration_datetime': return compare(a.registration_datetime, b.registration_datetime, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }