(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.stateStoreService = global.stateStoreService || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var StateStoreComponent = (function () {
    function StateStoreComponent() {
        this.name = 'Angular Library';
    }
    return StateStoreComponent;
}());
StateStoreComponent.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'my-lib',
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
    { type: _angular_core.Injectable },
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
    { type: _angular_core.NgModule, args: [{
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

exports.StateStoreComponent = StateStoreComponent;
exports.StateStoreService = StateStoreService;
exports.StateStoreModule = StateStoreModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=state-store-service.umd.js.map
