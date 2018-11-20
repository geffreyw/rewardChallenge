import {Component, Input, OnInit} from '@angular/core';
import {Reward} from '../../interfaces/reward';


@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styleUrls: ['./reward-item.component.scss']
})
export class RewardItemComponent implements OnInit {

  @Input() item: Reward;
  @Input() index: number;
  @Input() aanpasbaar = false;

  showMore = false;
  constructor() { }

  ngOnInit() {
  }

}