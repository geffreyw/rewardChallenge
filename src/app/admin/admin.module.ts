import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../sharedModules/shared.module';
import {FormsModule} from '@angular/forms';
import {ApproveRewardsComponent} from './approve-rewards/approve-rewards.component';
import {ApproveRewardItemComponent} from './approve-rewards/approve-reward-item/approve-reward-item.component';
import {ApproveTasksComponent} from './approve-oprdachten/approve-tasks.component';
import {ApproveTaskItemComponent} from './approve-oprdachten/approve-task-item/approve-task-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [AdminComponent, ApproveRewardsComponent, ApproveRewardItemComponent, ApproveTasksComponent, ApproveTaskItemComponent]
})
export class AdminModule { }
