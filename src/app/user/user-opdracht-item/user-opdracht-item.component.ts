import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserOpdracht} from '../../interfaces/userOpdracht';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-opdracht-item',
  templateUrl: './user-opdracht-item.component.html',
  styleUrls: ['./user-opdracht-item.component.scss']
})
export class UserOpdrachtItemComponent implements OnInit {

  @Input() opdracht: UserOpdracht;

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
