import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Opdracht} from '../../interfaces/opdracht';
import {OpdrachtService} from '../../services/opdracht.service';


@Component({
  selector: 'app-opdracht-item',
  templateUrl: './opdracht-item.component.html',
  styleUrls: ['./opdracht-item.component.scss']
})
export class OpdrachtItemComponent implements OnInit {

  @Input() item: Opdracht;
  @Input() index: number;
  @Input() aanpasbaar = false;

  @Output() delete = new EventEmitter();

  showMore = false;
  constructor(public opdrachtService: OpdrachtService) { }

  ngOnInit() {
  }

  deleteOpdracht() {
    this.delete.emit();
  }



}
