import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Crate } from '../model/crate/crate.model';
import { CrateService } from '../service/crate/crate.service';
import { map, startWith } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-crating',
  templateUrl: './crating.component.html',
  styleUrls: ['./crating.component.css']
})
export class CratingComponent implements OnInit {
  user_id: number;
  crates: Crate[];
  crateNumbers: string[];
  packageBarcodes: string[];
  packageBarcode: string;

  // Material
  crate_id = new FormControl();
  filteredCrates: Observable<string[]>;
  notifier: NotifierService;
  checked: boolean;

  constructor(
    private crateService: CrateService,
    private notifierService: NotifierService
  ) {
    this.crates = [];
    this.crateNumbers = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.packageBarcodes = [];
    this.packageBarcode = '';
    this.notifier = this.notifierService;
    this.filteredCrates = this.crate_id.valueChanges.pipe(
      startWith(''),
      map(value => this.filterValues(value))
    );
    this.checked = false;
  }

  ngOnInit(): void {
    this.crateService.getReadyCrates(this.user_id).subscribe(data => {
      this.crates = data;
      console.log(this.crates);
      for (let i = 0; i < this.crates.length; i++) {
        this.crateNumbers[i] = this.crates[i].bar_code;
      }
      console.log(this.crateNumbers);
    });
  }

  filterValues(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.crateNumbers.filter(crateNumber => crateNumber.toLowerCase().indexOf(filterValue) === 0);
  }

  onCrateChange(crate_no: number) {
    console.log(crate_no);
  }

  addPackage(newValue: string) {
    if (newValue.length === 13) {
      console.log('Barcode', this.packageBarcode);
      const index = this.packageBarcodes.indexOf(this.packageBarcode);
      if (index == -1) {
        this.packageBarcodes.push(this.packageBarcode);
      } else {
        console.log("Already added");
        this.notifier.notify('warning', 'Package already has been added!');
      }
      this.packageBarcode = "";
      newValue = "";
    }
  }

  removePackage(barcode: string) {
    console.log(barcode);
    const index = this.packageBarcodes.indexOf(barcode);
    if (index > -1) {
      this.packageBarcodes.splice(index, 1);
    }
  }

  onCheckboxStatusChange(checked:boolean){
    console.log('Hi', checked);
    this.checked = checked;
  }

  onSubmit() {
    var crating = {
      crate_id: parseInt(this.crate_id.value),
      user_id: this.user_id,
      bar_code: this.packageBarcodes
    }
    console.log('Crating', crating);
    this.crateService.addPackage(crating).subscribe(data => {
      this.notifier.notify('success', 'Crating successful!');
      console.log(data);
      this.packageBarcode = "";
      this.packageBarcodes = [];
      
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message)
    });
    this.checked = false;
  }
}
