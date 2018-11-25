import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';
import {UserOpdracht} from '../interfaces/userOpdracht';
import {UserService} from '../services/user.service';
import {UserReward} from '../interfaces/userReward';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user: User;
  week = {
    points: 0,
    tasks: []
  };
  approvedTasks: UserOpdracht[] = [];
  pendingTasks: UserOpdracht[] = [];
  approvedRewards: UserReward[] = [];
  pendingRewards: UserReward[] = [];

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.readUserdata();
  }

  readUserdata() {
    this.authService.userData$.subscribe(user => {
      if (user !== null) {
        for (const task of user.tasks) {
          if (task.approved) {
            this.approvedTasks.push(task);
          } else {
            this.pendingTasks.push(task);
          }
        }
        for (const reward of user.rewards) {
          if (reward.approved) {
            this.approvedRewards.push(reward);
          } else {
            this.pendingRewards.push(reward);
          }
        }
        this.user = user;
      }
    });
  }

  deleteOpdracht(task) {
    this.pendingTasks = this.pendingTasks.filter(t => t !== task);
    this.userService.deleteOpdracht(task, this.user._id).subscribe();
  }

  deleteReward(reward) {
    this.pendingRewards = this.pendingRewards.filter(r => r !== reward);
    this.userService.deleteReward(reward, this.user._id).subscribe();
  }

}
