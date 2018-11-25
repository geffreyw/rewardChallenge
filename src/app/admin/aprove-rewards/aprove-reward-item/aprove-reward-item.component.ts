import { Component, OnInit, Input } from '@angular/core';
import { UserReward } from '../../../interfaces/userReward';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-aprove-reward-item',
  templateUrl: './aprove-reward-item.component.html',
  styleUrls: ['./aprove-reward-item.component.scss']
})
export class AproveRewardItemComponent implements OnInit {

  @Input() item: UserReward;

  pendingStyle = {
    'color': 'grey', 
    'font-size': '0.8rem', 
    'text-align': 'right'
  }

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  async toggleAprovementReward() {
    try {
      const res = await this.userService.toggleApprovementReward(this.item).toPromise();
      this.item.approved = !this.item.approved;
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

  status() {
    return (!this.item.pending) ? ((this.item.approved) ? 'btn btn-success' : 'btn btn-danger') : 'btn btn-warning';
  }

}
