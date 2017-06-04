(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['state-store-library'] = global['state-store-library'] || {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var StateStoreComponent = (function () {
    function StateStoreComponent() {
    }
    return StateStoreComponent;
}());
StateStoreComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'state-store-component',
                template: "<h1>State Store component</h1>"
            },] },
];
/**
 * @nocollapse
 */
StateStoreComponent.ctorParameters = function () { return []; };

var StateStoreService = (function () {
    function StateStoreService() {
    }
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
    /**
     * @return {?}
     */
    StateStoreModule.forRoot = function () {
        return {
            ngModule: StateStoreModule,
            providers: [StateStoreService]
        };
    };
    return StateStoreModule;
}());
StateStoreModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    StateStoreComponent
                ],
                exports: [
                    StateStoreComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
StateStoreModule.ctorParameters = function () { return []; };

exports.StateStoreModule = StateStoreModule;
exports.StateStoreComponent = StateStoreComponent;
exports.StateStoreService = StateStoreService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
