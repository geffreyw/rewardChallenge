import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { UserOpdracht } from '../../../interfaces/userOpdracht';

@Component({
  selector: 'app-approve-task-item',
  templateUrl: './approve-task-item.component.html',
  styleUrls: ['./approve-task-item.component.scss']
})
export class ApproveTaskItemComponent implements OnInit {

  @Input() item: UserOpdracht;

  @Output() delete = new EventEmitter();
  @Output() approve = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
