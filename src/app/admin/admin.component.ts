import { Component, OnInit } from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {OpdrachtService} from '../services/opdracht.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
}
