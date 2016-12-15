'use strict';

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { User } from './user';
import './rxjs-operators';
import { Observable } from 'rxjs';


@Injectable()
export class AccountService {

  constructor(private http: Http) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post('/api/login', {username: username, password: password})
       .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('yo');
    return body || { };
  }

  private handleErr(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


  register() {

  }

  logout() {

  }


}



