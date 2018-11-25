import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';
import {UserOpdracht} from '../interfaces/userOpdracht';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userData$.subscribe(user => {
      if (user !== null) {
        for (const task of user.tasks) {
          if (task.approved) {
            this.week.points += task.points;
            this.week.tasks.push(task);
          }
        }
        this.user = user;
      }
    });
  }

}
