import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductionHouse } from 'src/app/model/production-house/production-house.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionHouseService {

  constructor(private httpClient: HttpClient) { }

  getProductionHouseList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<ProductionHouse[]>(`http://182.163.112.102:8001/api/production_house/list/`, { user_id: user_id }, { headers: headers });
  }
  
}
