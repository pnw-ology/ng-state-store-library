import { Component } from '@angular/core';
export class StateStoreComponent {
    constructor() {
        this.name = 'Angular Library';
    }
}
StateStoreComponent.decorators = [
    { type: Component, args: [{ selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
StateStoreComponent.ctorParameters = () => [];
function StateStoreComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    StateStoreComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    StateStoreComponent.ctorParameters;
    /** @type {?} */
    StateStoreComponent.prototype.name;
}
//# sourceMappingURL=lib.component.js.map