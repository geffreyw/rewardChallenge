import {Component, Input, OnInit, Pipe} from '@angular/core';
import {Reward} from '../interfaces/reward';
import {RewardService} from '../services/reward.service';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {

  @Input() aanpasbaar: boolean;
  @Input() elementClass: string;
  @Input() limit: string;

  rewardList: Reward[];
  filterargs = {punten: '5'};

  constructor(
    private rewardService: RewardService
  ) { }

  ngOnInit() {
    this.rewardList = this.rewardService.rewardList;
  }

}
