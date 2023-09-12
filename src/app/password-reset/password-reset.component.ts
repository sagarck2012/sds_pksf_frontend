import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  step: number;
  token: string;
  password: string;
  confirmPassword: string;
  passwordResetForm: FormGroup;
  notifier: NotifierService;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notifierService: NotifierService
    ) {
      this.passwordResetForm = this.formBuilder.group({});
      this.step=0;
      this.password = '';
      this.confirmPassword = '';
      this.token = '';
      this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', Validators.email]
    });
    
  }

  onEmailSubmit() {
    this.authService.emailVerifivation(this.passwordResetForm.value).subscribe(data => {
      console.log(data);
      this.step += 1;
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.message);
    });
  }

  onCodeSubmit() {
    if (this.password.length >0 && this.confirmPassword.length> 0 && this.password === this.confirmPassword) {
      const newPasswordObj = {
        'token': this.token,
        'password': this.password
      };
      this.authService.passwordReset(newPasswordObj).subscribe(data => {
        this.notifier.notify('success', 'Password has been changed!');
        console.log(data);
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.notifier.notify('error', err.error.message);
      });
    } else {
      console.log('passwords did not match');
      this.notifier.notify('warning', 'passwords did not match!');
    }

    
  }

  


}
