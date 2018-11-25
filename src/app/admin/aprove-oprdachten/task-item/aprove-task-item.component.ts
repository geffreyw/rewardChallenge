import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserOpdracht } from '../../../interfaces/userOpdracht';

@Component({
  selector: 'app-task-item',
  templateUrl: './aprove-task-item.component.html',
  styleUrls: ['./aprove-task-item.component.scss']
})
export class AproveTaskItemComponent implements OnInit {

  @Input() item: UserOpdracht;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  async toggleApprovementTask() {
    try {
      const res = await this.userService.toggleApprovementTask(this.item).toPromise();
      this.item.approved = !this.item.approved;
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

}
