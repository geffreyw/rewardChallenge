import {Injectable} from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filter, map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtService {

  readonly TASKS_URL = 'http://54.38.35.163:6969/tasks';
  opdrachten$: Observable<any>;

  constructor(private http: HttpClient) {
    this.opdrachten$ = this.http.get<Opdracht[]>(this.TASKS_URL).pipe(
      map( opdrachten => {
        for (const opdracht of opdrachten) {
          opdracht.description = 'Dit is een testopdracht met een test description. Ik ben aan het wachten op de api om de description te fixen.';
          opdracht.short = `${opdracht.description.substring(0, 15).trim()}...`;
        }
        return opdrachten;
      }),
      share()
    );
  }
}
