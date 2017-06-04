import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class StateStoreComponent {
  name = 'Angular Library';
}
