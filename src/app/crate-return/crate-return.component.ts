import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CrateService } from '../service/crate/crate.service';

@Component({
  selector: 'app-crate-return',
  templateUrl: './crate-return.component.html',
  styleUrls: ['./crate-return.component.css']
})
export class CrateReturnComponent implements OnInit {

  crateBarcode: string;
  crateBarcodes: string[];
  user_id: number;
  message: string;
  notifier: NotifierService;
  checked: boolean;

  constructor(
    private crateService: CrateService,
    private notifierService: NotifierService
  ) {
    this.crateBarcode = '';
    this.crateBarcodes = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.message = '';
    this.notifier = this.notifierService;
    this.checked = false;
  }

  ngOnInit(): void {
  }

  addCrate(newValue: string) {
    if (newValue.length === 13) {
      console.log('Barcode', this.crateBarcode);
      const index = this.crateBarcodes.indexOf(this.crateBarcode);
      if (index == -1) {
        this.crateBarcodes.push(this.crateBarcode);
        this.crateBarcode = "";
      } else {
        console.log("Already added")
      }
      this.crateBarcode = '';
      newValue = '';

    }
  }

  removeCrate(crateBarcode: string) {
    console.log(crateBarcode);
    const index = this.crateBarcodes.indexOf(crateBarcode);
    if (index > -1) {
      this.crateBarcodes.splice(index, 1);
    }
  }

  onCheckboxStatusChange(checked: boolean) {
    console.log('Hi', checked);
    this.checked = checked;
  }

  onSubmit() {
    var crates = {
      user_id: this.user_id,
      bar_code: this.crateBarcodes
    }
    console.log('Crates', crates);
    this.crateService.returnCrate(crates).subscribe(data => {
      this.notifier.notify('success', 'Crate has been returned!');
      console.log(data);
      this.crateBarcode = "";
      this.crateBarcodes = [];
    }, err => {
      console.log(err.error.message);
      this.notifier.notify('error', err.error.message);
    });
  }

}
