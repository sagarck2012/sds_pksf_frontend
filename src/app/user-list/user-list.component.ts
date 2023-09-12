import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { User } from '../model/user/user.model';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  user_id: number;
  page: number;
  pageSize: number;
  notifier: NotifierService;

  constructor(
    private userService: UserService,
    private notifierService: NotifierService
  ) {
    this.users = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.page = 1;
    this.pageSize = 5;
    this.notifier = this.notifierService;
  }


  ngOnInit(): void {
    this.userService.userList(this.user_id).subscribe(data => {
      console.log('Hello', data);
      this.users = data;
    });
  }

  deactivateUser(user_id: string) {
    console.log('Deactivate user', user_id);
    this.userService.deactivateUser(user_id).subscribe(data => {
      this.notifier.notify('success', 'User has been deactivated!');
      console.log(data);
      this.users = this.users.filter(item => item.user_id !== user_id);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message);
    });
  }

}
