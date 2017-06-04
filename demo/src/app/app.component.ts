import { Component, OnInit} from '@angular/core';
import { StateStoreLibraryModule } from 'state-store-library/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateStoreLibraryModule]
})
export class AppComponent {
  public title = 'app works!';

  constructor(heroService: StateStoreLibraryModule) {
    console.log(StateStoreLibraryModule);

  }
}
