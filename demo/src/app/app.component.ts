import { Component } from '@angular/core';
import { StateStoreService } from 'state-store-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(service: StateStoreService) {
    console.log('state-store-service:', service)
  }
}
