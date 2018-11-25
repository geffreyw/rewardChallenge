import { Component, OnInit } from '@angular/core';
import { UserReward } from '../../interfaces/userReward';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './aprove-rewards.component.html',
  styleUrls: ['./aprove-rewards.component.scss']
})
export class AproveRewardsComponent implements OnInit {

  userRewardsList: UserReward[];


  constructor(private userService: UserService) {
    this.userRewardsList = new Array<UserReward>();

  }

  async getAllUserRewards() {
    try {
      const users = await this.userService.getUsers().toPromise();
      for (const user of users) {
        for (const reward of user.rewards) {
          let userReward = new UserReward;
          userReward = reward;
          userReward.user = {
            id: user._id,
            email: user.email
          };
          this.userRewardsList.push(userReward);
        }
      }
    } catch (err) {}
  }

  ngOnInit() {
  }

}
