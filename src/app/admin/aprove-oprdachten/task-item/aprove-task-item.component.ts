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

  pendingStyle = {
    'color': 'grey', 
    'font-size': '0.8rem', 
    'text-align': 'right'
  }

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

  status() {
    return (!this.item.pending) ? ((this.item.approved) ? 'btn btn-success' : 'btn btn-danger') : 'btn btn-warning';
  }

}
