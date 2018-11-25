import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbAlertModule,
  NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule.forRoot(),
    NgbCollapseModule.forRoot(),
    NgbDropdownModule.forRoot(),
  ],
  exports: [
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
  ],
  declarations: []
})
export class NgBootstrapModule {
}
