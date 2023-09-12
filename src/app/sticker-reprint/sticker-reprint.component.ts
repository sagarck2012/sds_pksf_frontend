import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sticker } from '../model/sticker/sticker.model';
import { PackagingService } from '../service/packaging/packaging.service';
import { StickerService } from '../service/sticker/sticker.service';

@Component({
  selector: 'app-sticker-reprint',
  templateUrl: './sticker-reprint.component.html',
  styleUrls: ['./sticker-reprint.component.css']
})
export class StickerReprintComponent implements OnInit {

  sticker_id_list: number[];
  printed_sticker_list: Sticker[];
  comment: string;
  user_id: number;
  message: string;

  constructor(
    private stickerService: StickerService,
    private packagingService: PackagingService,
    private router: Router
  ) {
    this.sticker_id_list = [];
    this.printed_sticker_list = [];
    this.comment = '';
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.message = '';
  }

  ngOnInit(): void {
    this.printed_sticker_list = this.stickerService.sticker_list;
    if (this.printed_sticker_list.length ==0 ){
      this.router.navigate(['/sticker/search']);

    }
  }

  selectedSticker(sticker_id: number) {
    let index = this.sticker_id_list.indexOf(sticker_id);
    if (index == -1) {
      this.sticker_id_list.push(sticker_id);
    } else {
      this.sticker_id_list.splice(index, 1);
    }
    console.log(this.sticker_id_list);
  }

  renewSticker() {
    var damagedStickers = {
      user_id: this.user_id,
      comment: this.comment,
      sticker_id_list: '['+this.sticker_id_list+']'
    }

    this.packagingService.renewSticker(damagedStickers).subscribe(data => {
      console.log(data);
      this.message = data.message;
      this.router.navigate(['/sticker/search']);
    }, err => {
      console.log(err);
      this.message = err.error.message;
    });
  }

}
