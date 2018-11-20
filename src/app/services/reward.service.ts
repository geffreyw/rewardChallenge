import {Injectable} from '@angular/core';
import {Reward} from '../interfaces/reward';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  readonly TASKS_URL = 'http://54.38.35.163:6969/rewards';
  rewards$: Observable<any>;

  constructor(private http: HttpClient) {
    console.log('HttpClient');
    this.rewards$ = this.http.get<Reward[]>(this.TASKS_URL).pipe(
      map(rewards => {
        for (const reward of rewards) {
          reward.description = 'Dit is een testopdracht met een test description. Ik ben aan het wachten op de api om de description te fixen.';
          reward.short = `${reward.description.substring(0, 15).trim()}...`;
        }
        return rewards;
      }),
      share()
    );
  }
}
