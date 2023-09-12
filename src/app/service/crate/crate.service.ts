import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crate } from 'src/app/model/crate/crate.model';

@Injectable({
  providedIn: 'root'
})
export class CrateService {

  crate_barcode: string;

  constructor(private httpClient: HttpClient) {
    this.crate_barcode = '';
   }

  registerCrate(crate: Crate): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.post(`http://182.163.112.102:8001/api/crate/register/`, crate, {headers: headers});
  }

  getReadyCrates(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/crate/ready/`, {user_id: user_id}, {headers: headers});
  }

  crateList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<Crate[]>(`http://182.163.112.102:8001/api/crate/list/`, {user_id: user_id}, {headers: headers});
  }

  addPackage(crating: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/crating/add_package/`, crating, {headers: headers});
  }

  returnCrate(crates: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/shipping/return_crate/`, crates, {headers: headers});
  }

}
