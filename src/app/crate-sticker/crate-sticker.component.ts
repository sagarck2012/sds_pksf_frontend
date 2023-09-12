import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrateService } from '../service/crate/crate.service';

@Component({
  selector: 'app-crate-sticker',
  templateUrl: './crate-sticker.component.html',
  styleUrls: ['./crate-sticker.component.css']
})
export class CrateStickerComponent implements OnInit {

  barcode: string;

  constructor(
    private route: ActivatedRoute,
    private crateService: CrateService,
    private router: Router
    ) { 
    this.barcode = crateService.crate_barcode;
  }

  ngOnInit(): void {
    if(this.barcode === '') {
      this.router.navigate(['/crate/register']);
    }
  }

  printSticker() {
    window.print();
  }

}
