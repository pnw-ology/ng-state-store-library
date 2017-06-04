import { Component } from '@angular/core';
export class LibComponent {
    constructor() {
        this.name = 'Angular Library';
    }
}
LibComponent.decorators = [
    { type: Component, args: [{ selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
LibComponent.ctorParameters = () => [];
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