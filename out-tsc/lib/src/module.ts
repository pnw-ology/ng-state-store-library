import { NgModule } from '@angular/core';

import { StateStoreComponent } from './component/lib.component';
import { StateStoreService } from './service/lib.service';

@NgModule({
  declarations: [StateStoreComponent],
  providers: [StateStoreService],
  exports: [StateStoreComponent]
})
export class StateStoreModule { }
