import { Injectable } from '@angular/core';
import { Sticker } from 'src/app/model/sticker/sticker.model';

@Injectable({
  providedIn: 'root'
})
export class StickerService {
  sticker_list: Sticker[];
  constructor() {
    this.sticker_list = [];
  }
}
