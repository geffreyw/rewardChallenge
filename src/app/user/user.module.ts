import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {SharedModule} from '../sharedModules/shared.module';
import {AllOpdrachtenComponent} from './all-opdrachten/all-opdrachten.component';
import {AllRewardsComponent} from './all-rewards/all-rewards.component';
import {UserOpdrachtItemComponent} from './user-opdracht-item/user-opdracht-item.component';
import {UserRewardItemComponent} from './user-reward-item/user-reward-item.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserComponent, AllOpdrachtenComponent, AllRewardsComponent, UserOpdrachtItemComponent, UserRewardItemComponent]
})
export class UserModule { }
