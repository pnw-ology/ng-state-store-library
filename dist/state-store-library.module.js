import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateStoreService } from './services/state-store.service';
var StateStoreLibraryModule = (function () {
    function StateStoreLibraryModule() {
    }
    StateStoreLibraryModule.forRoot = function () {
        return {
            ngModule: StateStoreLibraryModule,
            providers: [StateStoreService]
        };
    };
    return StateStoreLibraryModule;
}());
export { StateStoreLibraryModule };
StateStoreLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                exports: [],
                imports: [
                    CommonModule
                ]
            },] },
];
/** @nocollapse */
StateStoreLibraryModule.ctorParameters = function () { return []; };
//# sourceMappingURL=state-store-library.module.js.map