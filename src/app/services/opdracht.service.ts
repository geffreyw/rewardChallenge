import {Injectable} from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtService {

  opdrachtList: Opdracht[] = [
    {
      opdrachtId: '1',
      titel: 'Blogpost schrijven',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 1
    },
    {
      opdrachtId: '2',
      titel: 'Presentatie geven',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 5
    },
    {
      opdrachtId: '3',
      titel: 'Nieuwe technologie onderzoeken',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 10
    },
    {
      opdrachtId: '4',
      titel: 'Meetup bijwonen',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 5
    },
  ];

  constructor() {
  }

  // CRUD operaties: Create, (Read), Update, Delete
  createItem(item: Opdracht) {
    this.opdrachtList.push(item);
  }

  updateItem(item: Opdracht, i: number) {
    this.opdrachtList[i] = item;
  }

  deleteItem(i: number) {
    this.opdrachtList.splice(i, 1);
  }
}
