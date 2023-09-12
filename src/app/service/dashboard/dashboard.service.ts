import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSummaryData(user_id: number) {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post<any>(`http://182.163.112.102:8001/api/dashboard/summary_data/`, {user_id: user_id}, { headers: headers });
  }
}
