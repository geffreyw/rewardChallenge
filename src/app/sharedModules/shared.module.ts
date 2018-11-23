import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpdrachtListComponent} from '../opdracht-list/opdracht-list.component';
import {OpdrachtItemComponent} from '../opdracht-list/opdracht-item/opdracht-item.component';

import {RewardListComponent} from '../reward-list/reward-list.component';
import {RewardItemComponent} from '../reward-list/reward-item/reward-item.component';

import {UserListComponent} from '../user-list/user-list.component';

import {FormsModule} from '@angular/forms';
import {UserItemComponent} from '../user-list/user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OpdrachtListComponent,
    OpdrachtItemComponent,
    RewardListComponent,
    RewardItemComponent,
    UserListComponent,
    UserItemComponent
  ],
  declarations: [
    OpdrachtListComponent,
    OpdrachtItemComponent,
    RewardListComponent,
    RewardItemComponent,
    UserListComponent,
    UserItemComponent
  ]
})
export class SharedModule {
}
