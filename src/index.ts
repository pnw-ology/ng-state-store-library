import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateStoreComponent } from './state-store.component';
import { StateStoreService } from './state-store.service';

export * from './state-store.component';
export * from './state-store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StateStoreComponent
  ],
  exports: [
    StateStoreComponent
  ]
})
export class StateStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateStoreModule,
      providers: [StateStoreService]
    };
  }
}
