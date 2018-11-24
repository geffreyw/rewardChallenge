import { Component, OnInit, Input } from '@angular/core';
import { UserReward } from '../../../interfaces/userReward';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styleUrls: ['./reward-item.component.scss']
})
export class RewardItemComponent implements OnInit {

  @Input() item: UserReward

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  async toggleAprovementReward(){
    try{
      let res = await this.userService.toggleApprovementReward(this.item).toPromise()
      this.item.approved = !this.item.approved;
      console.log(res)

    }catch(err){
      console.log(err)
    }
  }

}
