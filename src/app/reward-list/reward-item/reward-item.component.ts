import {Component, Input, OnInit} from '@angular/core';
import {Reward} from '../../interfaces/reward';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styles: []
})
export class RewardItemComponent implements OnInit {

  @Input() item: Reward;
  @Input() index: number;
  @Input() aanpasbaar = false;

  showMore = false;
  userPunten = 20;

  getReward() {
    if (confirm('Wil je je prijs claimen?')) {

      console.log('prijs ophalen');

    }

}


  constructor() { }

  ngOnInit() {
  }

}
