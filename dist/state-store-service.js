import { Component, Injectable, NgModule } from '@angular/core';

class StateStoreComponent {
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

class StateStoreService {
    constructor() { }
    /**
     * @return {?}
     */
    getMeaning() { return 42; }
}
StateStoreService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
StateStoreService.ctorParameters = () => [];

class StateStoreModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { StateStoreComponent, StateStoreService, StateStoreModule };
//# sourceMappingURL=state-store-service.js.map
