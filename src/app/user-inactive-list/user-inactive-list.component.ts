import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { User } from '../model/user/user.model';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-inactive-list',
  templateUrl: './user-inactive-list.component.html',
  styleUrls: ['./user-inactive-list.component.css']
})
export class UserInactiveListComponent implements OnInit {

  inactiveUsers: User[];
  user_id: number;
  page: number;
  pageSize: number;
  notifier: NotifierService;

  constructor(
    private userService: UserService,
    private notifierService: NotifierService
  ) {
    this.inactiveUsers = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.page = 1;
    this.pageSize = 5;
    this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    this.userService.inactiveUserList(this.user_id).subscribe(data => {
      this.inactiveUsers = data;
      console.log(this.inactiveUsers);
    }, err => {
      console.log(err);
    });
  }

  activateUser(user_id: string) {
    console.log('Activate user', user_id);
    
    this.userService.activateUser(user_id).subscribe(data => {
      this.notifier.notify('success', 'User has been activated!');
      console.log(data);
      this.inactiveUsers = this.inactiveUsers.filter(item => item.user_id !== user_id);
      console.log('Test', this.inactiveUsers);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message);
    });
  }
}
