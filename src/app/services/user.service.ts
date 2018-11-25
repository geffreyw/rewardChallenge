import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, share} from 'rxjs/operators';
import {User} from '../interfaces/user';
import {e} from '@angular/core/src/render3';
import { UserOpdracht } from '../interfaces/userOpdracht';
import { UserReward } from '../interfaces/userReward';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly USER_URL = 'https://hidden-citadel-73667.herokuapp.com/users';
  readonly API_URL = 'https://hidden-citadel-73667.herokuapp.com';

  readonly authToken: string;
  readonly uid: string;
  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('token');
    this.uid = localStorage.getItem('uid');
  }

  getUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    };
    return this.http.get<User[]>(this.USER_URL, httpOptions).pipe(
      map((users: User[]) => {
        for (const user of users) {
          let totPoints = 0;
          for (const task of user.tasks) {
            if (task.approved) {
              totPoints += task.points;
            }
          }
          for (const reward of user.rewards) {
            if (reward.approved || reward.pending ) {
              totPoints -= reward.points;
            }
          }
          user.points = totPoints;
        }
        return users;
      }),
      share(),
      catchError(this.handleError)
    );
  }

  getUser(id: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    };
    return this.http.get<User>(this.USER_URL + '/' + id, httpOptions).pipe(
      map((user: User) => {
        let totPoints = 0;
        for (const task of user.tasks) {
          if (task.approved) {
            totPoints += task.points;
          }
        }
        for (const reward of user.rewards) {
          if (reward.approved || reward.pending ) {
            totPoints -= reward.points;
          }
        }
        user.points = totPoints;
        return user;
      }),
      share(),
      catchError(this.handleError)
    );
  }

  zoekUser(term: string): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authToken
      })
    };
    term = term.trim().toLowerCase();
    return this.http.get<User[]>(this.USER_URL, httpOptions).pipe(
      map(users => {
        for (const user of users) {
          let totPoints = 0;
          for (const task of user.tasks) {
            if (task.approved) {
              totPoints += task.points;
            }
          }
          user.points = totPoints;
        }
        return users.filter(u => u.email.toLowerCase().indexOf(term) >= 0);
      }),
      share(),
      catchError(this.handleError)
    );
  }

  addUser(email, password): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.post<User>(this.USER_URL, {'email': email, 'password': password}, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: String): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.delete(this.USER_URL + '/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    console.log(user);
    delete user.points;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.put<User>(this.USER_URL + '/' + user._id, user, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteOpdracht(task: UserOpdracht, uid: string): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.delete(
      this.USER_URL + '/'
      + uid + '/tasks/'
      + task._id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteReward(reward: UserReward, uid: string): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.delete(
      this.USER_URL + '/'
      + uid + '/rewards/'
      + reward._id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  approveOpdracht(task: UserOpdracht): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };

    const body = {
      approved: true
    };

    return this.http.put<User>(`${this.API_URL}/users/${task.user.id}/tasks/${task._id}/status`, body, httpOptions)
      .pipe(catchError(this.handleError));
  }

  approveReward(reward: UserReward): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };

    const body = {
      approved: true
    };

    return this.http.put<User>(`${this.API_URL}/users/${reward.user.id}/rewards/${reward._id}/status`, body, httpOptions)
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
    console.log(error);
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');

  }
}
