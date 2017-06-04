import { Injectable } from '@angular/core';
var LibService = (function () {
    function LibService() {
    }
    /**
     * @return {?}
     */
    LibService.prototype.getMeaning = function () { return 42; };
    return LibService;
}());
export { LibService };
LibService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
LibService.ctorParameters = function () { return []; };
function LibService_tsickle_Closure_declarations() {
    /** @type {?} */
    LibService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    LibService.ctorParameters;
}
//# sourceMappingURL=lib.service.js.map