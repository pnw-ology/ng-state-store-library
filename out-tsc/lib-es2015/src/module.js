import { NgModule } from '@angular/core';
import { StateStoreComponent } from './component/lib.component';
import { StateStoreService } from './service/lib.service';
export class StateStoreModule {
}
StateStoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StateStoreComponent],
                providers: [StateStoreService],
                exports: [StateStoreComponent]
            },] },
];
/**
 * @nocollapse
 */
StateStoreModule.ctorParameters = () => [];
function StateStoreModule_tsickle_Closure_declarations() {
    /** @type {?} */
    StateStoreModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    StateStoreModule.ctorParameters;
}
//# sourceMappingURL=module.js.map