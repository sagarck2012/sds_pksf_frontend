import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;
  user_id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
  nid: string;
  production_house: string;
  role_name: string;
  notifier: NotifierService;

  constructor(
    private userService: UserService,
    private router: Router,
    private notifierService: NotifierService
  ) {
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.name = '';
    this.email = '';
    this.phone_number = '';
    this.address = '';
    this.nid = '';
    this.production_house = '';
    this.role_name = '';
    this.notifier = this.notifierService;
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

  saveInfo() {
    var user = {
      user_id: this.user_id,
      name: this.name,
      email: this.email,
      phone_number: this.phone_number,
      address: this.address,
      nid: this.nid
    }
    this.userService.editUser(user).subscribe(data =>{
      this.notifier.notify('success', 'User profile has been updated!');
      console.log(data);
      this.router.navigate(['/user/profile']);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message);
    });
  }
}
