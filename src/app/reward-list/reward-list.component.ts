import {Component, Input, OnInit, Pipe} from '@angular/core';
import {Reward} from '../interfaces/reward';
import {RewardService} from '../services/reward.service';
import {Opdracht} from '../interfaces/opdracht';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {

  @Input() aanpasbaar: boolean;
  @Input() filter: boolean;
  @Input() elementClass: string;
  @Input() limit: string;

  rewardList: Reward[];
  filterValue: string;
  // filterargs = {punten: '5'};

  newReward: Reward = new Reward();

  showNew = false;

  preloader = true;

  constructor(private rewardService: RewardService) {
    this.readRewards();
  }

  ngOnInit() {
  }

  readRewards() {
    this.rewardService.getRewards().subscribe(
      (rewards: Reward[]) => this.rewardList = rewards,
      error => console.error('Observer got an error: ' + error),
      () => this.preloader = false
    );
  }

  filterRewards() {
    if (this.filterValue) {
      this.rewardService.zoekReward(this.filterValue).subscribe(
        (rewards: Reward[]) => this.rewardList = rewards,
        error => console.error('Observer got an error: ' + error)
      );
    } else {
      this.readRewards();
    }
  }

  addReward() {
    this.rewardService.addReward(this.newReward).subscribe(() =>
      this.readRewards()
    );
    this.clearNewReward();
  }

  deleteReward(reward: Reward) {
    this.rewardList = this.rewardList.filter(r => r !== reward);
    this.rewardService.deleteReward(reward._id).subscribe();
  }

  clearNewReward() {
    this.showNew = false;
    this.newReward = new Reward();
  }

}
