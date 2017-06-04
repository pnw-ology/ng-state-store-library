import { Component } from '@angular/core';
import { StateStoreService } from 'state-store-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StateStoreService ]
})
export class AppComponent {
  title = 'app works!';
  constructor(private sampleService: StateStoreService) {
    console.log('sample-service:', sampleService);
  }
}
