import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AlertBox} from '../interfaces/alert-box';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  alertBox$: BehaviorSubject<AlertBox> = new BehaviorSubject(null);

  constructor() { }

  clearMessage() {
    this.alertBox$.next(null);
  }
}
