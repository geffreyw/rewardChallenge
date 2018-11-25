import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reward} from '../../interfaces/reward';
import {RewardService} from '../../services/reward.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styleUrls: ['./reward-item.component.scss']
})
export class RewardItemComponent implements OnInit {

  @Input() item: Reward;
  @Input() index: number;
  @Input() aanpasbaar = false;

  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  showMore = false;
  editReward = false;

  user: User;
  userPunten = 0;

  rewardEdit: Reward;

  constructor(private rewardService: RewardService, private authService: AuthService) {
    this.readUserdata();
  }

  readUserdata() {
    this.authService.userData$.subscribe(user => {
      if (user !== null) {
        for (const task of user.tasks) {
          if (task.approved) {
            this.userPunten += task.points;
          }
        }
        for (const reward of user.rewards) {
          if (reward.approved || reward.pending) {
            this.userPunten -= reward.points;
          }
        }
        this.user = user;
      }
    });
  }

  ngOnInit() {
    this.rewardEdit = Object.assign({}, this.item);
  }

  deleteReward() {
    this.delete.emit();
  }

  clearEdit() {
    this.rewardEdit = Object.assign({}, this.item);
    this.editReward = false;
  }

  updateReward() {
    this.rewardService.updateReward(this.rewardEdit).subscribe(opdracht => {
      this.update.emit();
    });
    this.clearEdit();
  }

  async claimReward() {
    // console.log("merci");
    try{
      let res = await this.rewardService.claimReward(this.item).toPromise()
      console.log(res);
    }catch(err){
      console.log(err)

    }
    
  }

}
