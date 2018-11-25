import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AlertBox} from '../interfaces/alert-box';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Login} from '../interfaces/Login';
import {User} from '../interfaces/user';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  alertBox$: BehaviorSubject<AlertBox> = new BehaviorSubject(null);
  userData$: BehaviorSubject<User> = new BehaviorSubject(null);

  LOGIN_URL = 'https://hidden-citadel-73667.herokuapp.com/login';
  USER_URL = 'https://hidden-citadel-73667.herokuapp.com/users';
  token$: Observable<Login>;

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
    this.authState()
      .subscribe(user => {
        this.setUserData(user);
      }, () => this.logout()
    );
  }

  // Message BS4 alert-box
  setMessage(msg: string, color: string) {
    this.alertBox$.next({
      message: msg,
      color: color
    });
  }

  clearMessage() {
    this.alertBox$.next(null);
  }

  emailLogin(email: string, password: string) {
    this.getToken(email, password)
      .subscribe(
        resp => {
          console.log('logedIn ', resp);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('uid', resp.user.id);
          this.authState().subscribe(user => {
              this.setUserData(user);
              return true;
            }
          );
        },
        error => {
          this.handleError(error);
          return false;
        }
      );
  }

  authState(): Observable<any> {
    const data = {
      'token': localStorage.getItem('token'),
      'uid': localStorage.getItem('uid')
    };
    if (data.token && data.uid) {
      return this.userService.getUser(data.uid);
    } else {
      return new Observable<User>();
    }
  }

  logout() {
    // console.warn('logedout');
    localStorage.clear();
    this.setUserData(null);
  }

  getToken(email: string, password: string): Observable<Login> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.token$ = this.http.post<Login>(this.LOGIN_URL, {email, password}, httpOptions);
    return this.token$;
  }

  private setUserData(user: User) {
    // console.warn('user data set', user);
    if (user !== null) {
      this.userData$.next(user);
      this.router.navigate(['/user']);
    } else {
      this.userData$.next(null);
    }
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
