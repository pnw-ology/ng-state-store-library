import { Component } from '@angular/core';
var LibComponent = (function () {
    function LibComponent() {
        this.name = 'Angular Library';
    }
    return LibComponent;
}());
export { LibComponent };
LibComponent.decorators = [
    { type: Component, args: [{ selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
LibComponent.ctorParameters = function () { return []; };
function LibComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LibComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    LibComponent.ctorParameters;
    /** @type {?} */
    LibComponent.prototype.name;
}
//# sourceMappingURL=lib.component.js.map