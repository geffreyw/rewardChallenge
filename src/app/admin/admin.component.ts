import { Component, OnInit } from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {OpdrachtService} from '../services/opdracht.service';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: User;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.authService.userData$.subscribe(data => this.user = data);
  }
}
