import { Component, Injectable } from '@angular/core';
var StateStoreService = (function () {
    function StateStoreService() {
        // add logic here
        console.log('state-store-service invoked!');
    }
    /**
     * @param {?} x
     * @return {?}
     */
    StateStoreService.prototype.echo = function (x) {
        return x;
    };
    return StateStoreService;
}());
StateStoreService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
StateStoreService.ctorParameters = function () { return []; };
var StateStoreComponent = (function () {
    function StateStoreComponent() {
    }
    return StateStoreComponent;
}());
StateStoreComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ssl-state-store-component',
                template: "\n    <h1>state-store.component invoked!!!</h1>\n  "
            },] },
];
/**
 * @nocollapse
 */
StateStoreComponent.ctorParameters = function () { return []; };
// expose public interfaces (classes) here
/**
 * Entry point for all public APIs of the package.
 */
/**
 * Generated bundle index. Do not edit.
 */
export { StateStoreService, StateStoreComponent };
//# sourceMappingURL=state-store-library.es5.js.map
