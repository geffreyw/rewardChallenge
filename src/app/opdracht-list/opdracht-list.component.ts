import {Component, Input, OnInit} from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {OpdrachtService} from '../services/opdracht.service';

@Component({
  selector: 'app-opdracht-list',
  templateUrl: './opdracht-list.component.html',
  styleUrls: ['./opdracht-list.component.scss']
})
export class OpdrachtListComponent implements OnInit {

  @Input() aanpasbaar: boolean;

  opdrachtList: Opdracht[];

  constructor(private opdrachtService: OpdrachtService) { }

  ngOnInit() {
    this.opdrachtList = this.opdrachtService.opdrachtList;
  }

}
