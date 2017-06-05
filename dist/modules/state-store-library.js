import { Component, Injectable } from '@angular/core';

class StateStoreService {
    constructor() {
        // add logic here
        console.log('state-store-service invoked!');
    }
    /**
     * @param {?} x
     * @return {?}
     */
    echo(x) {
        return x;
    }
}
StateStoreService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
StateStoreService.ctorParameters = () => [];

class StateStoreComponent {
}
StateStoreComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ssl-state-store-component',
                template: `
    <h1>state-store.component invoked!!!</h1>
  `
            },] },
];
/**
 * @nocollapse
 */
StateStoreComponent.ctorParameters = () => [];

// expose public interfaces (classes) here

/**
 * Entry point for all public APIs of the package.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { StateStoreService, StateStoreComponent };
//# sourceMappingURL=state-store-library.js.map
