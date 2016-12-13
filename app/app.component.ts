import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid header">
      <div class="row header-row">
        <div class="col-xs-12 header-col nopadding ">
          <h1>StudyZone</h1>
          <div class="login-wrapper">
            <form action="http://google.com" class="form-inline">
              <input type="text" class="form-control form-control-sm" id="username" placeholder="Username">
              <input type="text" class="form-control form-control-sm" id="password" placeholder="Password">
              <input type="submit" class="btn btn-submit btn-sm" value="Login">
            </form>
          </div>
        </div>
      </div>
    </div>
    <registration-component></registration-component>
    
  `,
  styles: [`
    .header {
        min-width: 750px;
    }
    .header-col {
        background-color: #336697;
        border-bottom: 4px outset #6396CA;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header h1 {
        padding: 10px;
        text-shadow: 2px 1px 5px #000;  
        color: #DAEEFF;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 900;
    }
    .login-wrapper {
        display: inline-block;
        padding-right: 10px;
    }
    
    .login-wrapper input {
    }
    
    .login-wrapper button {
    
    }
    


  `]
})
export class AppComponent  { name = 'Angular'; }
