import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() item: User;
  @Input() index: number;

  @Output() update = new EventEmitter();

  editing = false;

  editUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.editUser = Object.assign({}, this.item);
  }

  updateUser() {
    this.userService.updateUser(this.editUser).subscribe(
      () => this.update.emit()
    );
    this.clearEdit();
  }

  clearEdit() {
    this.editing = false;
    this.editUser = Object.assign({}, this.item);
  }

}
