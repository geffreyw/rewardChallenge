import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';
import {Opdracht} from '../interfaces/opdracht';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList: User[];

  filterValue: string;

  preloader = true;

  showNew = false;

  constructor(private userService: UserService) {
    this.readUsers();
  }

  ngOnInit() {
  }

  readUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => this.usersList = users,
      error => console.error('Observer got an error: ' + error),
      () => this.preloader = false
    );
  }

  filterOpdrachten() {
    if (this.filterValue) {
      this.userService.zoekUser(this.filterValue).subscribe(
        (users: User[]) => this.usersList = users,
        error => console.error('Observer got an error: ' + error)
      );
    } else {
      this.readUsers();
    }
  }

  addUser(data) {
    this.userService.addUser(data.email, data.password).subscribe(() =>
      this.readUsers()
    );
    this.clearNewUser();
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user._id).subscribe( () =>
      this.usersList = this.usersList.filter(u => u !== user));
  }

  clearNewUser() {
    this.showNew = false;
  }
}
