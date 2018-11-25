import {Injectable} from '@angular/core';
import {Reward} from '../interfaces/reward';
import {User} from '../interfaces/user';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  readonly REWARD_URL = 'https://hidden-citadel-73667.herokuapp.com/rewards';
  readonly API_URL = 'https://hidden-citadel-73667.herokuapp.com';
  readonly authToken: string;
  readonly uid: string;
  readonly lengteShort = 30;

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('token');
    this.uid = localStorage.getItem('uid');
  }

  getRewards(): Observable<Reward[]> {
    return this.http.get<Reward[]>(this.REWARD_URL).pipe(
      map( rewards => {
        for (const reward of rewards) {
          if (reward.description.length >= this.lengteShort) {
            reward.short = `${reward.description.substring(0, 15).trim()}...`;
          }
        }
        return rewards;
      }),
      share(),
      catchError(this.handleError)
    );
  }

  zoekReward(term: string): Observable<Reward[]> {
    term = term.trim().toLowerCase();
    return this.http.get<Reward[]>(this.REWARD_URL).pipe(
      map( rewards => {
        for (const reward of rewards) {
          reward.short = `${reward.description.substring(0, 15).trim()}...`;
        }
        return rewards.filter(o => o.name.toLowerCase().indexOf(term) >= 0);
      }),
      share(),
      catchError(this.handleError)
    );
  }

  addReward(reward: Reward): Observable<Reward> {
    console.log(reward);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.post<Reward>(this.REWARD_URL, reward, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteReward(id: String): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.delete(this.REWARD_URL + '/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateReward(reward: Reward): Observable<Reward> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.put<Reward>(this.REWARD_URL + '/' + reward._id, reward , httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  claimReward(reward: Reward): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applicationi/json',
        'Authorization': this.authToken
      })
    }

    return this.http.post<User>(`${this.API_URL}/users/${this.uid}/rewards/${reward._id}`,null,httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
