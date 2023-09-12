import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  shipping_code: string;

  constructor(private httpClient: HttpClient) {
    this.shipping_code = '';
  }

  getDivisionList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/division/`, { user_id: user_id }, { headers: headers });
  }

  getDistrictList(division: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/district/`, division, { headers: headers });
  }

  getUpazilaList(district: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/upazila/`, district, { headers: headers });
  }

  addShipment(shipment: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/shipping/add_crate/`, shipment, { headers: headers });
  }

  getShipmentList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/shipment/list/`, { user_id: user_id }, { headers: headers });
  }

  receiveShipment(shipment: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/shipping/receive_crate/`, shipment, { headers: headers });
  }

  getShipmentDetail(shipment: any): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<[]>(`http://182.163.112.102:8001/api/shipping/detail/`, shipment, { headers: headers });
  }

}
