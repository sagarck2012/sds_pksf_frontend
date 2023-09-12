import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  notifier: NotifierService;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notifierService: NotifierService
  ) {
    this.loginForm = this.formBuilder.group({});
    this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      this.notifier.notify('success', 'User logged in!');
      localStorage.setItem("access_token", data['access_token']);
      localStorage.setItem("user", JSON.stringify(data["user"]));
      localStorage.setItem("user_id", data.user.user_id);
      localStorage.setItem("name", data.user.name);
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.detail);
    });
  }

}
