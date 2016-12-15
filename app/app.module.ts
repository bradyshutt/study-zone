import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { RegistrationComponent } from './registration.component';
import { AccountService } from './account.service';


@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule
  ],
  declarations: [
     AppComponent,
     RegistrationComponent
  ],
  providers: [
     AccountService
  ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
