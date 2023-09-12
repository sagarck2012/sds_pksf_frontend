import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sticker } from '../model/sticker/sticker.model';
import { StickerService } from '../service/sticker/sticker.service';

@Component({
  selector: 'app-packaging-sticker',
  templateUrl: './packaging-sticker.component.html',
  styleUrls: ['./packaging-sticker.component.css']
})

export class PackagingStickerComponent implements OnInit {
  sticker_list: Sticker[];
  constructor(
    private route: ActivatedRoute,
    private stickerService: StickerService,
    private router: Router
    ) {
    this.sticker_list = [];
  }

  ngOnInit(): void {
    this.sticker_list = this.stickerService.sticker_list;
    console.log('Print', this.sticker_list);
    if(this.sticker_list.length === 0) {
      this.router.navigate(['/packaging/search']);
    }
  }

  printSticker() {
    window.print();
  }

}
