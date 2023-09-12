import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name: string;

  constructor(
    private authService: AuthService
  ) {
    this.name = localStorage.getItem("name")+'';
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
