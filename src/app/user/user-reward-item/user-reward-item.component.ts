import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserOpdracht} from '../../interfaces/userOpdracht';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-reward-item',
  templateUrl: './user-reward-item.component.html',
  styleUrls: ['./user-reward-item.component.scss']
})
export class UserRewardItemComponent implements OnInit {

  @Input() opdracht: UserOpdracht;

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
