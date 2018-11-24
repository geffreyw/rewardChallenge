import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {SharedModule} from '../sharedModules/shared.module';
import {OpdrachtenComponent} from './opdrachten/opdrachten.component';
import {RewardsComponent} from './rewards/rewards.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserComponent, OpdrachtenComponent, RewardsComponent]
})
export class UserModule { }
