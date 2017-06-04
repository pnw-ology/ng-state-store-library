import { Component } from '@angular/core';
import { SampleService } from 'state-store-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SampleService ]
})
export class AppComponent {
  title = 'app works!';
  constructor(private sampleService: SampleService) {
    console.log('sample-service:', sampleService);
  }
}
