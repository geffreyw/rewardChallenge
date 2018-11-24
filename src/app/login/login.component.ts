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

  preloader = false;

  constructor(public authService: AuthService, private http: HttpClient) {

  }

  ngOnInit() {
    this.authService.alertBox$.subscribe(data => {
      this.alertBox = data;
    });
  }

  emailLogin(data: any, isValid: string) {
    this.authService.clearMessage();
    this.preloader = true;
    if (isValid) {
      this.authService.emailLogin(data.email, data.password);
      // localStorage.setItem('loginData', JSON.stringify(data));
    } else {
      this.authService.setMessage('Email/password not valid...', 'alert-danger');
    }
  }
}
