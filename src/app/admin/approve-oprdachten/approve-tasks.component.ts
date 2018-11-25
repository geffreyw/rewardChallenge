import { Component, OnInit } from '@angular/core';
import { UserOpdracht } from '../../interfaces/userOpdracht';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-approve-tasks',
  templateUrl: './approve-tasks.component.html',
  styleUrls: ['./approve-tasks.component.scss']
})
export class ApproveTasksComponent implements OnInit {

  userOprdrachtenList: UserOpdracht[] = [];

  constructor(private userService: UserService) {
    this.getAllPendingOpdrachten();
  }

  ngOnInit() {
  }

  getAllPendingOpdrachten() {
    this.userService.getUsers().subscribe(
      users => {
        for (const user of users) {
          for (const task of user.tasks) {
            if (!task.approved) {
              let userOpdracht = new UserOpdracht;
              userOpdracht = task;
              userOpdracht.user = {
                id : user._id,
                email : user.email
              };
              this.userOprdrachtenList.push(userOpdracht);
            }
          }
        }
      }
    );
  }

  deleteOpdracht(task) {
    this.userOprdrachtenList = this.userOprdrachtenList.filter(o => o !== task);
    this.userService.deleteOpdracht(task, task.user.id).subscribe();
  }

  approveOpdracht(task) {
    this.userOprdrachtenList = this.userOprdrachtenList.filter(o => o !== task);
    this.userService.approveOpdracht(task).subscribe();
  }
}
