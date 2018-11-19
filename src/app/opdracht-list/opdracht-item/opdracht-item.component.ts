import {Component, Input, OnInit} from '@angular/core';
import {Opdracht} from '../../interfaces/opdracht';

@Component({
  selector: 'app-opdracht-item',
  templateUrl: './opdracht-item.component.html',
  styleUrls: ['./opdracht-item.component.scss']
})
export class OpdrachtItemComponent implements OnInit {

  @Input() item: Opdracht;
  @Input() index: number;
  @Input() aanpasbaar = false;

  showMore = false;

  constructor() { }

  ngOnInit() {
  }

}
