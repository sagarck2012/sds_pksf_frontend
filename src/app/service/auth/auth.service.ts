import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: User): Observable<any> {
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/login/`, user);
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    this.router.navigate(['/login']);
  }

  isLoggedin(): boolean {
    if (localStorage.getItem("access_token") == null) {
      return false;
    } else {
      return true;
    }
  }

  emailVerifivation(email: string): Observable<any> {
    return this.httpClient.post(`http://182.163.112.102:8001/api/user/request-reset-email/`, email);
  }

  passwordReset(newPassword: any): Observable<any> {
    return this.httpClient.patch(`http://182.163.112.102:8001/api/user/password-reset-complete`, newPassword);
  }

}
