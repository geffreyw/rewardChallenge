import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {OpdrachtListComponent} from '../opdracht-list/opdracht-list.component';
import {OpdrachtItemComponent} from '../opdracht-list/opdracht-item/opdracht-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AdminComponent, OpdrachtListComponent, OpdrachtItemComponent]
})
export class AdminModule { }
