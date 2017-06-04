import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StateStoreModule } from 'state-store-service';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, StateStoreModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
