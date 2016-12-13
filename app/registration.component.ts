'use strict';

import { Component } from '@angular/core';


@Component({
  selector: 'registration-component',

  template: `
    <div class="main-content container">
      <div class="row">
        <h3 class="join-title">Join StudyZone</h3>
        <h5 class="join-sub-title">Registration is free and easy!</h5>
      </div>
      <div class="row">
        <div class="col-sm-8">
        
          <form>
          
            <div class="form-group row">
              <div class="col-xs-6 first-name-input">
                <input type="text" class="form-control" id="first-name" placeholder="First name">
              </div>
              <div class="col-xs-6 last-name-input">
                <input type="text" class="form-control" id="last-name" placeholder="Last name">
              </div>
            </div>
            
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="email" class="form-control" id="email" placeholder="Email">
              </div>
            </div>
            
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="text" class="form-control" id="username" placeholder="Username">
              </div>
            </div>
            
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
            </div>
            
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="password" class="form-control" id="password-confirm" placeholder="Confirm password">
              </div>
            </div>
            
            <div class="form-group row">
              <div class="col-xs-8"></div>
              <div class="col-xs-4">
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
            </div>
            
          </form>
        
        
        </div>
      </div>
    </div>
  `,
  styles: [`
    .main-content {
        margin: 25px 0 0 20px;
        padding-left: 20px;
    }
    .join-sub-title {
        padding-bottom: 10px;
    }
    .first-name-input {
        padding-right: 5px;
    }
    .last-name-input {
        padding-left: 5px;
    }
    .form-group.row {
        margin-bottom: 8px;
    }
    
    

  `]
})

export class RegistrationComponent {


}





