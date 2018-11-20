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
export class OpdrachtListComponent implements OnInit, OnDestroy {

  @Input() aanpasbaar: boolean;
  @Input() elementClass: string;

  opdrachtenList: Opdracht[];
  filterValue: string;

  subscription: Subscription;

  constructor(public opdrachtService: OpdrachtService) {
    this.filterOpdrachten();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterOpdrachten() {
    this.subscription = this.opdrachtService.opdrachten$.subscribe(
      opdrachten => {
        if (this.filterValue) {
          this.opdrachtenList = opdrachten.filter( o => o.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0);
        } else {
          this.opdrachtenList = opdrachten;
        }
      },
      error => console.log(error),
    );
  }

}
