import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateStoreService } from './services/state-store.service';

@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class StateStoreLibraryModule {
    static forRoot() {
        return {
            ngModule: StateStoreLibraryModule,
            providers: [StateStoreService]
        };
    }
}
