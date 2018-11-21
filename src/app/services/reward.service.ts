import {Injectable} from '@angular/core';
import {Reward} from '../interfaces/reward';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  rewardList: Reward[] = [
    {
      rewardID: '1',
      titel: 'Euro deal',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 1
    },
    {
      rewardID: '2',
      titel: 'Bak bier',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 5
    },
    {
      rewardID: '3',
      titel: 'Mcdo Chicken nuggets',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 10
    },
    {
      rewardID: '4',
      titel: 'Reis naar benidorm',
      omschrijving: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda doloribus exercitationem, expedita explicabo ipsum molestiae, nam natus nemo quae quia quis quod, rem sit sunt unde vero!',
      short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci architecto assumenda',
      punten: 50
    },
  ];

  constructor() {
  }

  // CRUD operaties: Create, (Read), Update, Delete
  createItem(item: Reward) {
    this.rewardList.push(item);
  }

  updateItem(item: Reward, i: number) {
    this.rewardList[i] = item;
  }

  deleteItem(i: number) {
    this.rewardList.splice(i, 1);
  }
}
