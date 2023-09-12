import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from 'src/app/model/crop/crop.model';
import { CropType } from 'src/app/model/cropType/crop-type.model';
import { Vegetable } from 'src/app/model/vegetable/vegetable.model';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private httpClient: HttpClient) { }

  getCropList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.post<Crop[]>(`http://182.163.112.102:8001/api/crop/list/`, { user_id: user_id }, { headers: headers });
  }

  getCropTypeList(user_id: number, crop_id: string): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.post<CropType[]>(`http://182.163.112.102:8001/api/croptype/list/`, { user_id: user_id, crop_id: crop_id }, { headers: headers });
  }

  getVegetableList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.post<any>(`http://182.163.112.102:8001/api/dashboard/harvest_quantity/`, { user_id: user_id }, { headers: headers });
  }
}
