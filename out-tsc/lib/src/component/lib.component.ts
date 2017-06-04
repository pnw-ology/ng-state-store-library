import { Component } from '@angular/core';

@Component({selector: 'my-lib',
  template: "<h2>Hello {{name}}</h2> ",
  styles: [""]
})
export class StateStoreComponent {
  name = 'Angular Library';
}
