import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  user_id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
  nid: string;
  production_house: string;
  role_name: string;

  constructor(
    private userService: UserService
  ) {
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.name = '';
    this.email = '';
    this.phone_number = '';
    this.address = '';
    this.nid = '';
    this.production_house = '';
    this.role_name = '';
  }

  ngOnInit(): void {
    this.userService.userProfile(this.user_id).subscribe(data => {
      console.log(data);
      this.user = data;
      this.name = this.user.name;
      this.email = this.user.email;
      this.phone_number = this.user.phone_number;
      this.address = this.user.address;
      this.nid = this.user.nid;
      this.production_house = this.user.production_house;
      this.role_name = this.user.role_name;
    }, err => {
      console.log(err);
    });
  }

}
