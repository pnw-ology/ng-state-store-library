(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("clone"), require("object-hash"), require("object-path"), require("rxjs/BehaviorSubject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "clone", "object-hash", "object-path", "rxjs/BehaviorSubject"], factory);
	else if(typeof exports === 'object')
		exports["state-store-library"] = factory(require("@angular/core"), require("@angular/common"), require("clone"), require("object-hash"), require("object-path"), require("rxjs/BehaviorSubject"));
	else
		root["state-store-library"] = factory(root["@angular/core"], root["@angular/common"], root["clone"], root["object-hash"], root["object-path"], root["rxjs/BehaviorSubject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_state_store_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StateStoreLibraryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StateStoreLibraryModule = (function () {
    function StateStoreLibraryModule() {
    }
    StateStoreLibraryModule_1 = StateStoreLibraryModule;
    StateStoreLibraryModule.forRoot = function () {
        return {
            ngModule: StateStoreLibraryModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_state_store_service__["a" /* StateStoreService */]]
        };
    };
    StateStoreLibraryModule = StateStoreLibraryModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]
            ]
        })
    ], StateStoreLibraryModule);
    return StateStoreLibraryModule;
    var StateStoreLibraryModule_1;
}());



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return State; });
var State = (function () {
    function State() {
        this.keyValueStores = {};
        this.ttlStores = {};
        this.singleUseStores = {};
        this.listeners = {};
    }
    return State;
}());



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_hash__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_hash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_hash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clone__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_state__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StateStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StateStoreService = (function () {
    function StateStoreService(GC_INTERVAL) {
        var _this = this;
        this.store = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_5__models_state__["a" /* State */]());
        this.GC_INTERVAL = GC_INTERVAL;
        if (GC_INTERVAL) {
            setInterval(function () { return _this.collectGarbage(); }, GC_INTERVAL);
        }
    }
    /**
     * getState - returns the state object at path
     *
     * @param {string} path
     * @returns any
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.getState = function (path) {
        var state = this.store.value;
        if (__WEBPACK_IMPORTED_MODULE_3_object_path__["has"](state.keyValueStores, path)) {
            var value = __WEBPACK_IMPORTED_MODULE_3_object_path__["get"](state.keyValueStores, path);
            if (state.singleUseStores[path]) {
                this.clearSingleUseState(path);
            }
            if (state.ttlStores[path] && state.ttlStores[path] < Date.now()) {
                this.clearTtlState(path);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_clone__(value);
            }
        }
    };
    /**
     * setState - sets a state object at the given path to value, if limit is provided:
     *            if limit = true, then value may be returned ONCE and then will disappear,
     *            if limit = <number> then value will persist until <number> ms have tanspired,
     *            if limit = falsey then data persists throughout runtime
     *
     * @param {string} path
     * @param {*} value
     * @param {(boolean | number)} [limit]
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.setState = function (path, value, limit) {
        if (path && value) {
            this.triggerListener(path, value, limit);
            if (limit) {
                limit === true ? this.setSingleUseState(path, value) : this.setTtlState(path, value, limit);
            }
            else {
                this.setKeyValueState(path, value);
            }
        }
    };
    /**
     * clearState - if path is provided, clears the staate at the given path location,
     *              if path not present, clears all state
     *
     * @param {string} [path]
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.clearState = function (path) {
        if (path) {
            this.clearKeyValueState(path);
        }
        else {
            this.clearAllState();
        }
    };
    /**
     * addListener - adds a listener function at a given path. When data changes at this path,
     *               the listener function will be called with 3 paramerters (path, value, limit)
     *
     * @param {string} path
     * @param {Function} f
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.addListener = function (path, f) {
        var state = this.store.value;
        __WEBPACK_IMPORTED_MODULE_3_object_path__["set"](state.listeners, path, f);
        this.store.next(state);
    };
    /**
     * watchState - subscrives to state to watch changes
     *
     * @param {Observer} o
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.watchState = function (o) {
        return this.store.subscribe(o);
    };
    /**
     * removeListener - removes the listener at a given path
     *
     * @param {string} path
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.removeListener = function (path) {
        var state = this.store.value;
        __WEBPACK_IMPORTED_MODULE_3_object_path__["del"](state.listeners, path);
        this.store.next(state);
    };
    /**
     * getListener - returns the listener for a given path or undefined
     *
     * @param {string} path
     * @returns {Function}
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.getListener = function (path) {
        var state = this.store.value;
        return __WEBPACK_IMPORTED_MODULE_3_object_path__["get"](state.listeners, path);
    };
    /**
     * getHash - if path is specified returns the hash of object at path,
     *           without path, it reutns the hash of all stored data.
     *
     * @param {string} path
     * @returns
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.getHash = function (path) {
        if (path) {
            return __WEBPACK_IMPORTED_MODULE_2_object_hash__(this.getState(path));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_object_hash__(this.store.value);
        }
    };
    /**
     * getSize - if path is specified returns the size of the object at path,
     *           without path, it returns the size of all stored data. Size
     *           is returned as number of char in the stringified data.
     *
     * @param {string} [path]
     * @returns {number}
     *
     * @memberOf StateStoreService
     */
    StateStoreService.prototype.getSize = function (path) {
        if (path) {
            return this.pathSize(path);
        }
        else {
            return this.storeSize();
        }
    };
    //////////////////////////////// private
    StateStoreService.prototype.clearAllState = function () {
        var state = this.store.value;
        state.keyValueStores = {};
        state.ttlStores = {};
        state.singleUseStores = {};
        state.listeners = {};
        this.store.next(state);
    };
    StateStoreService.prototype.pathSize = function (path) {
        var state = this.store.value;
        var kv = JSON.stringify(this.getState(path) || '');
        return kv.length;
    };
    StateStoreService.prototype.storeSize = function () {
        var state = this.store.value;
        var kv = JSON.stringify(state.keyValueStores);
        return kv.length;
    };
    StateStoreService.prototype.triggerListener = function (path, value, limit) {
        var f = this.getListener(path);
        if (f) {
            f(path, value, limit);
        }
    };
    StateStoreService.prototype.setSingleUseState = function (path, value) {
        this.clearKeyValueState(path);
        this.clearTtlState(path);
        var state = this.store.value;
        __WEBPACK_IMPORTED_MODULE_3_object_path__["set"](state.keyValueStores, path, value);
        state.singleUseStores[path] = true;
        this.store.next(state);
    };
    StateStoreService.prototype.setTtlState = function (path, value, ttl) {
        this.clearKeyValueState(path);
        this.clearSingleUseState(path);
        var state = this.store.value;
        __WEBPACK_IMPORTED_MODULE_3_object_path__["set"](state.keyValueStores, path, value);
        state.ttlStores[path] = ttl + Date.now();
        this.store.next(state);
    };
    StateStoreService.prototype.setKeyValueState = function (path, value) {
        this.clearTtlState(path);
        this.clearSingleUseState(path);
        var state = this.store.value;
        __WEBPACK_IMPORTED_MODULE_3_object_path__["set"](state.keyValueStores, path, value);
        this.store.next(state);
    };
    StateStoreService.prototype.clearKeyValueState = function (path) {
        var state = this.store.value;
        if (__WEBPACK_IMPORTED_MODULE_3_object_path__["has"](state.keyValueStores, path)) {
            __WEBPACK_IMPORTED_MODULE_3_object_path__["del"](state.keyValueStores, path);
            this.store.next(state);
        }
    };
    StateStoreService.prototype.clearTtlState = function (path) {
        var state = this.store.value;
        if (__WEBPACK_IMPORTED_MODULE_3_object_path__["has"](state.keyValueStores, path)) {
            __WEBPACK_IMPORTED_MODULE_3_object_path__["del"](state.keyValueStores, path);
            this.store.next(state);
        }
        delete state.ttlStores[path];
    };
    StateStoreService.prototype.clearSingleUseState = function (path) {
        var state = this.store.value;
        if (__WEBPACK_IMPORTED_MODULE_3_object_path__["has"](state.keyValueStores, path)) {
            __WEBPACK_IMPORTED_MODULE_3_object_path__["del"](state.keyValueStores, path);
            this.store.next(state);
        }
        delete state.ttlStores[path];
    };
    StateStoreService.prototype.collectGarbage = function () {
        var state = this.store.value;
        // tslint:disable-next-line:prefer-const
        for (var path in state.ttlStores) {
            if (state.ttlStores.hasOwnProperty(path)) {
                if (state.ttlStores[path] < Date.now()) {
                    this.clearTtlState(path);
                }
            }
        }
    };
    ;
    StateStoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [Number])
    ], StateStoreService);
    return StateStoreService;
}());



/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("clone");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("object-hash");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("object-path");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("rxjs/BehaviorSubject");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_store_library_module__ = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "StateStoreLibraryModule", function() { return __WEBPACK_IMPORTED_MODULE_0__state_store_library_module__["a"]; });



/***/ }
/******/ ]);
});
//# sourceMappingURL=state-store-library.bundle.js.map