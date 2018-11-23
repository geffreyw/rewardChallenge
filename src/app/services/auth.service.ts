import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AlertBox} from '../interfaces/alert-box';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  alertBox$: BehaviorSubject<AlertBox> = new BehaviorSubject(null);
  USERS_URL = 'https://hidden-citadel-73667.herokuapp.com/login';
  constructor(private http: HttpClient) { }

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

  getToken(email: string, password: string): Observable<Login> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Login>(this.USERS_URL, {email, password}, httpOptions) ;
  }
}
