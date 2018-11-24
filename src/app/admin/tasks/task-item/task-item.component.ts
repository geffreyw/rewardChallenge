import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserOpdracht } from '../../../interfaces/userOpdracht';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item: UserOpdracht;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  async toggleApprovementTask(){
    try{
      let res = await this.userService.toggleApprovementTask(this.item).toPromise();
      this.item.approved = !this.item.approved;
      console.log(res)

    }catch(err){
      console.log(err);
    }
  }

}
