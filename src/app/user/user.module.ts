import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './header/userinfo/userinfo.component';
import { ScoreComponent } from './header/score/score.component';
import {SharedModule} from '../sharedModules/shared.module';
import { OpdrachtenComponent } from './opdrachten/opdrachten.component';
import { RewardsComponent } from './rewards/rewards.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserComponent, HeaderComponent, UserinfoComponent, ScoreComponent, OpdrachtenComponent, RewardsComponent]
})
export class UserModule { }
