import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../sharedModules/shared.module';
import {FormsModule} from '@angular/forms';
import {AproveRewardsComponent} from './aprove-rewards/aprove-rewards.component';
import {AproveRewardItemComponent} from './aprove-rewards/aprove-reward-item/aprove-reward-item.component';
import {AproveTasksComponent} from './aprove-oprdachten/aprove-tasks.component';
import {AproveTaskItemComponent} from './aprove-oprdachten/task-item/aprove-task-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [AdminComponent, AproveRewardsComponent, AproveRewardItemComponent, AproveTasksComponent, AproveTaskItemComponent]
})
export class AdminModule { }
