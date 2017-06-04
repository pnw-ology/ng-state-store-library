import { Component, Injectable, NgModule } from '@angular/core';

var StateStoreComponent = (function () {
    function StateStoreComponent() {
        this.name = 'Angular Library';
    }
    return StateStoreComponent;
}());
StateStoreComponent.decorators = [
    { type: Component, args: [{ selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
StateStoreComponent.ctorParameters = function () { return []; };

var StateStoreService = (function () {
    function StateStoreService() {
    }
    /**
     * @return {?}
     */
    StateStoreService.prototype.getMeaning = function () { return 42; };
    return StateStoreService;
}());
StateStoreService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
StateStoreService.ctorParameters = function () { return []; };

var StateStoreModule = (function () {
    function StateStoreModule() {
    }
    return StateStoreModule;
}());
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
StateStoreModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { StateStoreComponent, StateStoreService, StateStoreModule };
//# sourceMappingURL=state-store-service.es5.js.map
