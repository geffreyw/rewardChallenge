import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpdrachtListComponent} from '../opdracht-list/opdracht-list.component';
import {OpdrachtItemComponent} from '../opdracht-list/opdracht-item/opdracht-item.component';

import {RewardListComponent} from '../reward-list/reward-list.component';
import {RewardItemComponent} from '../reward-list/reward-item/reward-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OpdrachtListComponent,
    OpdrachtItemComponent,
    RewardListComponent,
    RewardItemComponent
  ],
  declarations: [
    OpdrachtListComponent,
    OpdrachtItemComponent,
    RewardListComponent,
    RewardItemComponent
  ]
})
export class SharedModule {
}
