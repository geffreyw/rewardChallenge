import { Component, OnInit } from '@angular/core';
import { UserReward } from '../../interfaces/userReward';
import { UserService } from '../../services/user.service';
import {UserOpdracht} from '../../interfaces/userOpdracht';

@Component({
  selector: 'app-aprove-rewards',
  templateUrl: './approve-rewards.component.html',
  styleUrls: ['./approve-rewards.component.scss']
})
export class ApproveRewardsComponent implements OnInit {

  userRewardsList: UserReward[] = [];


  constructor(private userService: UserService) {
    this.getAllPendingRewards();

  }

  ngOnInit() {
  }

  getAllPendingRewards() {
    this.userService.getUsers().subscribe(
      users => {
        for (const user of users) {
          for (const reward of user.rewards) {
            if (!reward.approved) {
              let userReward = new UserReward;
              userReward = reward;
              userReward.user = {
                id : user._id,
                email : user.email
              };
              this.userRewardsList.push(userReward);
            }
          }
        }
      }
    );
  }

  deleteOpdracht(reward) {
    console.log(reward);
    this.userRewardsList = this.userRewardsList.filter(r => r !== reward);
    this.userService.deleteReward(reward, reward.user.id).subscribe();
  }

  approveOpdracht(reward) {
    this.userRewardsList = this.userRewardsList.filter(r => r !== reward);
    this.userService.approveReward(reward).subscribe();
  }

}
