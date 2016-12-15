'use strict';

import { Component } from '@angular/core';
import { AccountService } from './account.service';



@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid header">
      <div class="row header-row">
        <div class="col-xs-12 header-col">
          <h1>StudyZone</h1>
          <form action="http://google.com" class="form-inline login-form">
            <div class="form-group">
              <input type="text" [(ngModel)]="loginData.username" name="username" class="form-control form-control-sm" 
                id="username" placeholder="Username">
              <input type="password" [(ngModel)]="loginData.password" name="password" 
                class="form-control form-control-sm" id="password" placeholder="Password">
            </div>
            <div class="form-group">
              <button type="submit" (click)="submitLogin()" class="btn btn-submit btn-sm text-right">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <registration-component></registration-component>
    
  `,
  styles: [`
    .header-col {
        background-color: #336697;
        border-bottom: 4px outset #6396CA;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header h1 {
        padding: 10px 10px 0 10px;
        text-shadow: 1px 1px 0px #222;  
        color: #DAEEFF;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 900;
    }
    .login-form {
        display: flex;
        justify-content: flex-end;
    }
    .login-form input, button {
        border-radius: 1px !important;
    }
    .login-form div {
        vertical-align: middle;
        margin: 0 3px;
    }
    .login-form .form-group input {
    }
    /*@media (max-width: 675px) {*/
    /*@media (max-width: 600px) {*/
        .login-form {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .login-form div {
            display: inline-flex;
            margin: 0 3px;
        }
        .login-form div input {
            display: block;
        }
    /*}*/

  `]
})
export class AppComponent  {
  loginData: any = { };
  name = 'Angular';

  constructor( private accountService: AccountService ) {};

  submitLogin() {
    console.log('username: ' + this.loginData.username);
    console.log('password: ' + this.loginData.password);
  }



}
