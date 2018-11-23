import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, share} from 'rxjs/operators';
import {User} from '../interfaces/user';
import {e} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly USER_URL = 'https://hidden-citadel-73667.herokuapp.com/users';
  authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjViZjQxYTdhZTcxNzlhNTZlMjEzNmQzOSIsImVtYWlsIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJ0YXNrcyI6W3sibWV0YSI6eyJkYXRlIjoiMTk3MC0wMS0yMVQwNDowNjo1MS4xOTFaIiwiZGVzY3JpcHRpb24iOiJNZWV0aW5nIHJldmlld2VkIn0sImFwcHJvdmVkIjpmYWxzZSwicGVuZGluZyI6dHJ1ZSwibmFtZSI6Ik1lZXRpbmciLCJwb2ludHMiOjUsIl9pZCI6IjViZjVhZDJjMzY2MGVmMzY0YTViMTBhOCJ9LHsibWV0YSI6eyJkYXRlIjoiMjAxOC0xMS0wOVQwMzowNjo1MS4xOTFaIiwiZGVzY3JpcHRpb24iOiJNZWV0aW5nIHJldmlld2VkIn0sImFwcHJvdmVkIjpmYWxzZSwicGVuZGluZyI6dHJ1ZSwibmFtZSI6Ik1lZXRpbmciLCJwb2ludHMiOjUsIl9pZCI6IjViZjVhZDVlMzY2MGVmMzY0YTViMTBhOSJ9XSwicmV3YXJkcyI6W3siYXBwcm92ZWQiOmZhbHNlLCJwZW5kaW5nIjp0cnVlLCJuYW1lIjoiQmFrIGJpZXIhIiwicG9pbnRzIjoyMCwiX2lkIjoiNWJmNTUzYjQyZjViYjgwMDE2OTgyY2FjIn1dfSwiaWF0IjoxNTQyOTY2NzU4LCJleHAiOjE1NDMwNTMxNTh9.6jGRXwsaQsUKMSB7goxxXZC0ZeAVluABOI7jcmfISGQ';

  constructor(private http: HttpClient) {
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
          user.points = totPoints;
        }
        return users;
      }),
      share(),
      catchError(this.handleError)
    );
  }

  /*zoekReward(term: string): Observable<Reward[]> {
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
  }*/

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
/*
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
  }*/

  updateUser(user: User): Observable<User> {
    console.log(user);
    delete user.points;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.put<User>(this.USER_URL + '/' + user._id, user , httpOptions).pipe(
      catchError(this.handleError)
    );
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
