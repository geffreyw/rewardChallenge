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
  @Output() update = new EventEmitter();

  showMore = false;
  editOpdracht = false;

  opdrachtEdit: Opdracht;
  constructor(public opdrachtService: OpdrachtService) {  }

  ngOnInit() {
    this.opdrachtEdit = Object.assign({}, this.item);
  }

  deleteOpdracht() {
    this.delete.emit();
  }

  clearEdit() {
    this.opdrachtEdit = Object.assign({}, this.item);
    this.editOpdracht = false;
  }

  updateOpdracht() {
    this.opdrachtService.updateOpdracht(this.opdrachtEdit).subscribe(opdracht => {
      this.update.emit();
    });
    this.clearEdit();
  }

}
