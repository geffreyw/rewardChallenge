import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {OpdrachtService} from '../services/opdracht.service';
import {from, Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-opdracht-list',
  templateUrl: './opdracht-list.component.html',
  styleUrls: ['./opdracht-list.component.scss']
})
export class OpdrachtListComponent implements OnInit {

  @Input() aanpasbaar: boolean;
  @Input() filter: boolean;
  @Input() elementClass: string;
  @Input() limit: string;


  opdrachtenList: Opdracht[];
  filterValue: string;

  newOpdracht: Opdracht = new Opdracht();

  subscription: Subscription;

  constructor(private opdrachtService: OpdrachtService) {
    this.readOpdrachten();
  }

  ngOnInit() {
  }

  readOpdrachten() {
    this.opdrachtService.getOpdrachten().subscribe(
      (opdrachten: Opdracht[]) => this.opdrachtenList = opdrachten,
      error => console.error('Observer got an error: ' + error)
    );
  }

  filterOpdrachten() {
    if (this.filterValue) {
      this.opdrachtService.zoekOpdracht(this.filterValue).subscribe(
        (opdrachten: Opdracht[]) => this.opdrachtenList = opdrachten,
        error => console.error('Observer got an error: ' + error)
      );
    } else {
      this.readOpdrachten();
    }
  }

  addOpdracht() {
    this.opdrachtService.addOpdracht(this.newOpdracht).subscribe(() =>
      this.readOpdrachten()
    );
  }

  deleteOpdracht(opdracht: Opdracht) {
    this.opdrachtenList = this.opdrachtenList.filter(o => o !== opdracht);
    this.opdrachtService.deleteOpdracht(opdracht._id).subscribe();
  }

}
