import { Component, OnInit } from '@angular/core';
import {AlertBox} from '../interfaces/alert-box';
import {AuthService} from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };

  alertBox: AlertBox = {
    message: '',
    color: ''
  };

  constructor(public authService: AuthService, private http: HttpClient) {

  }

  ngOnInit() {
    if (localStorage.getItem('loginData')) {
      this.loginData = JSON.parse(localStorage.getItem('loginData'));
    }
    this.authService.alertBox$.subscribe(data => {
      this.alertBox = data;
    });
  }

 async emailLogin(data: any, isValid: string) {
   this.authService.clearMessage();
   if (isValid) {
     try {
       const user$ = this.authService.getToken(data.email, data.password);
       const res = (await user$.toPromise());
       localStorage.setItem('token', res.token);
     } catch (err) {
       console.log(err);
     }
   } else {
     this.authService.setMessage('Email/password not valid...', 'alert-danger');
   }
 }

}
