import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var StateStoreComponent = (function () {
    function StateStoreComponent() {
    }
    return StateStoreComponent;
}());
StateStoreComponent.decorators = [
    { type: Component, args: [{
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
    { type: Injectable },
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

export { StateStoreModule, StateStoreComponent, StateStoreService };
