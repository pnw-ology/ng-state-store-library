import { Component } from '@angular/core';
import { StateStoreService } from 'state-store-service';

@Component({
  selector: 'integration-app',
  template: `
    <my-lib></my-lib>
    <h3>Meaning is: {{meaning}}</h3>
  `,
})
export class AppComponent {
  meaning: number;
  constructor(StateStoreService: StateStoreService) {
    this.meaning = StateStoreService.getMeaning();
  }
}
