import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StateStoreService } from 'state-store-library';
import { StateStoreComponent } from 'state-store-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StateStoreComponent
  ],
  exports: [StateStoreComponent],
  providers: [StateStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
