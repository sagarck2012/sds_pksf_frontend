import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  
  registerUser(user: User): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/register/`, user, { headers: headers });
  }

  userList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/active_list/`, {user_id: user_id},{ headers: headers });
  }

  inactiveUserList(user_id: number): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/inactive_list/`, {user_id: user_id}, { headers: headers });
  }

  deactivateUser(user_id: string): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/deactivate/`, {user_id: user_id}, { headers: headers });
  }

  activateUser(user_id: string): Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/activate/`, {user_id: user_id}, { headers: headers });
  }

  userProfile(user_id: number):Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/profile/`, {user_id: user_id}, { headers: headers });
  }

  editUser(user: any):Observable<any> {
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/edit/`, user, { headers: headers });
  }

}
