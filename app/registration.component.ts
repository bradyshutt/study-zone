'use strict';

import { Component } from '@angular/core';


@Component({
  selector: 'registration-component',

  template: `
    <div class="main-content container-fluid">
      <div class="row body-row">
        <div class="col-sm-6">
          <h3>What is StudyZone?</h3>
          <p>StudyZone lets students easily communicate with their fellow classmates 
             about things like homework, due dates, or any relevant course material,
             through a simple online group messaging system.</p>
          
          <div class="points">
          
            <div class="col-sm-6 col-xs-12 point">
              <p class="main">Add classes by your specific section number.</p>
              <p class="details">You'll automatically be added to three group chats:
                 One for your specific section, one for all sections with that professor,
                 and one for that entire course.</p>
            </div>
            
            <div class="col-sm-6 col-xs-12 point">
              <p class="main">Make sure your question doesn't get forgotten.</p>
              <p class="details">When a question is asked, it's pinned to the side of the chat until it's answered or removed.</p>
            </div>
            
            <div class="col-sm-6 col-xs-12 point">
              <p class="main">Say thanks!</p>
              <p class="details">If someone answered one of your questions, just press the "give thanks"
                 button near their name to let them know that you appreciate their help. </p>
            </div>
            
            <div class="col-sm-6 col-xs-12 point">
              <p class="main">It's always a competition.</p>
              <p class="details">You can see who the most helpful people are by looking at how many times they've been thanked.</p>
            </div>
            
          </div>
        </div>
        <div class="col-sm-6 clearfix">
          <div class="registration-wrapper">
            <h3 class="join-title">Join StudyZone</h3>
            <p class="join-sub-title">Registration is free and easy!</p>
            <form class="registration-form">
            
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
                <div class="col-xs-12">
                  <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
              </div>
              
              <div class="form-group row">
                <div class="col-xs-12">
                  <input type="password" class="form-control" id="password-confirm" placeholder="Confirm password">
                </div>
              </div>
              
              <div class="text-xs-right">
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        
        </div>
        
      </div>
    </div>
  `,
  styles: [`
    .main-content {
        margin: 25px 0 0 20px;
        padding-left: 20px;
    }
    .body-row h3 {
        margin-bottom: 0px;
        padding-bottom: 0px;
    
    }
    @media (max-width: 576px) {
        .body-row {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        } 
        .body-row > div:first-of-type {
            order: 1;
        }
    }
    .join-sub-title { 
        margin-right: 10px;
    }
    .registration-wrapper {
        max-width: 400px;
        float: right;
        margin-right: 10px;
    }
    .points {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .point {
        display: inline-block;
        min-width: 250px;
        margin-bottom: 15px; 
        padding: 10px;
        line-height: 1.2em;
    }
    .point .main {
        font-weight: 900;
        font-size: 1.2em;
    }
    .point .details {
        text-align: justify;
    }
    .point p {
        margin: 0px;
    }
    .registration-form div {
        margin-bottom: 2px;
    }
    .registration-form input, button {
        border-radius: 1px !important;
    }
    .last-name-input {
        padding-left: 2px;
    }
    .first-name-input {
        padding-right: 2px;
    }
  `]
})

export class RegistrationComponent {


}





