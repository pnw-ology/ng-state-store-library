(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.StateStoreLibrary = global.ng.StateStoreLibrary || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

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
    { type: _angular_core.Injectable },
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
    { type: _angular_core.Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ssl-state-store-component',
                template: "\n    <h1>state-store.component invoked!!!</h1>\n  "
            },] },
];
/**
 * @nocollapse
 */
StateStoreComponent.ctorParameters = function () { return []; };

exports.StateStoreService = StateStoreService;
exports.StateStoreComponent = StateStoreComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=state-store-library.umd.js.map
