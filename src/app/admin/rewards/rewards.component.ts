import { Component, OnInit } from '@angular/core';
import { UserReward } from '../../interfaces/userReward';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  userRewardsList: UserReward[];


  constructor(private userService: UserService) { 
    this.userRewardsList = new Array<UserReward>();

  }

  async getAllUserRewards() {
    try{
      const users = await this.userService.getUsers().toPromise();
      for (let user of users){
        for (let reward of user.rewards){
          let userReward = new UserReward
          userReward = reward;
          userReward.user = {
            id: user._id,
            email: user.email
          }
          this.userRewardsList.push(userReward)
        }
      }
    }catch(err){}
  }

  ngOnInit() {
  }

}
