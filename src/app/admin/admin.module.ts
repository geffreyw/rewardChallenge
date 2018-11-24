import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../sharedModules/shared.module';
import {FormsModule} from '@angular/forms';
import { RewardsComponent } from './rewards/rewards.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { RewardItemComponent } from './rewards/reward-item/reward-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [AdminComponent, RewardsComponent, TasksComponent, TaskItemComponent, RewardItemComponent]
})
export class AdminModule { }
