import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpdrachtListComponent} from '../opdracht-list/opdracht-list.component';
import {OpdrachtItemComponent} from '../opdracht-list/opdracht-item/opdracht-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    OpdrachtListComponent,
    OpdrachtItemComponent
  ],
  declarations: [
    OpdrachtListComponent,
    OpdrachtItemComponent
  ]
})
export class SharedModule {
}
