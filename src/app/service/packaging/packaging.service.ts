import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Harvesting } from 'src/app/model/harvesting/harvesting.model';
import { Packaging } from 'src/app/model/packaging/packaging.model';
import { Sticker } from 'src/app/model/sticker/sticker.model';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {

  constructor(private httpClient: HttpClient) { }

  getHarvestingList(harvesting: Harvesting): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<Harvesting[]>(`http://182.163.112.102:8001/api/packaging/harvest_search/`, harvesting, { headers: headers });
  }

  addPackaging(packaging: any) {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/packaging/add/`, packaging, { headers: headers });
  }

  getPackagingList(packaging: Packaging): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<Packaging[]>(`http://182.163.112.102:8001/api/packaging/package_search/`, packaging, { headers: headers });
  }

  searchSticker(packaging: any): Observable<any>  {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    
    return this.httpClient.post<Sticker[]>(`http://182.163.112.102:8001/api/packaging/sticker_search/`, packaging, {headers: headers});
  }

  printSticker(packaging: any): Observable<any>  {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    
    return this.httpClient.post<Sticker[]>(`http://182.163.112.102:8001/api/packaging/sticker_printed/`, packaging, {headers: headers});
  }

  renewSticker(damagedStickers: any): Observable<any>  {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    
    return this.httpClient.post<any>(`http://182.163.112.102:8001/api/packaging/sticker_damaged/`, damagedStickers, {headers: headers});
  }

  getPackagingDetail(packaging: any): Observable<any>  {
    return this.httpClient.post(`http://182.163.112.102:8001/api/packaging/detail/`, packaging);
  }
}
