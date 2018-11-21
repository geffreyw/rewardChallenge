import { Component, OnInit } from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {OpdrachtService} from '../services/opdracht.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
