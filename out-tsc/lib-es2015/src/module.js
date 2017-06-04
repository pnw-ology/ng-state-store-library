import { NgModule } from '@angular/core';
import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';
export class LibModule {
}
LibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibComponent],
                providers: [LibService],
                exports: [LibComponent]
            },] },
];
/**
 * @nocollapse
 */
LibModule.ctorParameters = () => [];
function LibModule_tsickle_Closure_declarations() {
    /** @type {?} */
    LibModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    LibModule.ctorParameters;
}
//# sourceMappingURL=module.js.map