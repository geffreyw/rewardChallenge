import {Injectable} from '@angular/core';
import {Opdracht} from '../interfaces/opdracht';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, filter, map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtService {

  readonly TASKS_URL = 'https://hidden-citadel-73667.herokuapp.com/tasks';
  authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjViZjQxYTdhZTcxNzlhNTZlMjEzNmQzOSIsImVtYWlsIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJ0YXNrcyI6W10sInJld2FyZHMiOltdfSwiaWF0IjoxNTQyNzg5MzQ1LCJleHAiOjE1NDI4NzU3NDV9.vK8Qx5Adi5A8bKBgMLAGinjpHUduJMuHW9Foc0Dzjp8';

  readonly lengteShort = 30;

  constructor(private http: HttpClient) {
  }

  getOpdrachten(): Observable<Opdracht[]> {
    return this.http.get<Opdracht[]>(this.TASKS_URL).pipe(
      map( opdrachten => {
        for (const opdracht of opdrachten) {
          if (opdracht.description.length >= this.lengteShort) {
            opdracht.short = `${opdracht.description.substring(0, 15).trim()}...`;
          }
        }
        return opdrachten;
      }),
      share(),
      catchError(this.handleError)
    );
  }

  zoekOpdracht(term: string): Observable<Opdracht[]> {
    term = term.trim().toLowerCase();
    return this.http.get<Opdracht[]>(this.TASKS_URL).pipe(
      map( opdrachten => {
        for (const opdracht of opdrachten) {
          opdracht.short = `${opdracht.description.substring(0, 15).trim()}...`;
        }
        return opdrachten.filter(o => o.name.toLowerCase().indexOf(term) >= 0);
      }),
      share(),
      catchError(this.handleError)
    );
  }

  addOpdracht(opdracht: Opdracht): Observable<Opdracht> {
    console.log(opdracht);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.post<Opdracht>(this.TASKS_URL, opdracht, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteOpdracht(id: String): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.delete(this.TASKS_URL + '/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateOpdracht(opdracht: Opdracht): Observable<Opdracht> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.put<Opdracht>(this.TASKS_URL + '/' + opdracht._id, opdracht , httpOptions).pipe(
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
