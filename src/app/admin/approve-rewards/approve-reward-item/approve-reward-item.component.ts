import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserReward } from '../../../interfaces/userReward';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-approve-reward-item',
  templateUrl: './approve-reward-item.component.html',
  styleUrls: ['./approve-reward-item.component.scss']
})
export class ApproveRewardItemComponent implements OnInit {

  @Input() item: UserReward;

  @Output() delete = new EventEmitter();
  @Output() approve = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
