import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RegistrationComponent } from './registration.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
     AppComponent,
     RegistrationComponent
  ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
