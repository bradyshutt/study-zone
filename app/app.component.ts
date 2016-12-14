import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid header">
      <div class="row header-row">
        <div class="col-xs-12 header-col">
          <h1>StudyZone</h1>
          <form action="http://google.com" class="form-inline login-form">
            <div class="form-group">
              <input type="text" class="form-control form-control-sm" id="username" placeholder="Username">
              <input type="password" class="form-control form-control-sm" id="password" placeholder="Password">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-submit btn-sm text-right">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <registration-component></registration-component>
    
  `,
  styles: [`
    .header {
        min-width: 486px;
    }
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
    .login-form input {
        border-radius: 0 !important;
    }
    .login-form div {
        vertical-align: middle;
        margin: 0 3px;
    }
    @media (max-width: 675px) {
        .login-form {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .login-form div {
            display: inline-block;
            margin: 0 3px;
        }
        .login-form div input {
            display: block;
        }
    }

  `]
})
export class AppComponent  { name = 'Angular'; }
