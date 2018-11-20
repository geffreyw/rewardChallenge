import {Component, Input, OnInit, Pipe, OnDestroy} from '@angular/core';
import {Reward} from '../interfaces/reward';
import {RewardService} from '../services/reward.service';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styles: []
})
export class RewardListComponent implements OnInit {

  @Input() aanpasbaar: boolean;
  @Input() elementClass: string;
  @Input() limit: string;

  rewardList: Reward[];

  readonly REWARDS_URL = 'http://54.38.35.163:6969/rewards';
  subscription: Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.subscription = this.http.get<any[]>(this.REWARDS_URL).subscribe( rewards => {
      this.rewardList = rewards;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
