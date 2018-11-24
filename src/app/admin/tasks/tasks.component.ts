import { Component, OnInit } from '@angular/core';
import { UserOpdracht } from '../../interfaces/userOpdracht';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  userOprdrachtenList : UserOpdracht[];

  constructor(private userService: UserService) {
    this.userOprdrachtenList = new Array<UserOpdracht>();
    this.getAllUserOpdrachten();

  }

  async getAllUserOpdrachten(){
    try {  
      const users =  await this.userService.getUsers().toPromise(); 
      for(let user of users){
        for (let task of user.tasks){
          let userOpdracht = new UserOpdracht
          userOpdracht = task;      
          userOpdracht.user = {
            id : user._id,
            email : user.email
          }
          this.userOprdrachtenList.push(userOpdracht)
        }        
      }
      console.log(this.userOprdrachtenList)
    }catch(err){
      console.log(err)
    }

  }

  ngOnInit() {
  }

}
