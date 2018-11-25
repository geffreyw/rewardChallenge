import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Opdracht} from '../../interfaces/opdracht';
import {OpdrachtService} from '../../services/opdracht.service';
import { UserOpdracht } from '../../interfaces/userOpdracht';


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
  showClaim = false;

  opdrachtEdit: Opdracht;
  userOpdracht: UserOpdracht;

  constructor(public opdrachtService: OpdrachtService) {  }

  ngOnInit() {
    this.opdrachtEdit = Object.assign({}, this.item);
    this.userOpdracht = new UserOpdracht;
    for (const key in this.item) {
      if (!key.match('^_')) {
        this.userOpdracht[key] = this.item[key];
      }
    }

    this.userOpdracht.meta = {
      description: null,
      date: new Date()
    };

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

  claimOpdracht(form) {
    this.userOpdracht.meta.date = form.metaDate;
    if (form.metaDescription) {
      this.userOpdracht.meta.description = form.metaDescription;
    }
    console.log(this.userOpdracht);
    this.opdrachtService.claimTask(this.item._id, this.userOpdracht).subscribe( () => {
      this.showClaim = false;
    });
  }

}
