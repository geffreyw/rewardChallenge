import { Component, OnInit } from '@angular/core';
import {AlertBox} from '../interfaces/alert-box';
import {AuthService} from '../services/auth.service';

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

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
