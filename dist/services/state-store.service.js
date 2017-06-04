import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as objectHash from 'object-hash';
import * as objectPath from 'object-path';
import * as clone from 'clone';
import { State } from '../models/state';
var StateStoreService = (function () {
    function StateStoreService(GC_INTERVAL) {
        var _this = this;
        this.store = new BehaviorSubject(new State());
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
        if (objectPath.has(state.keyValueStores, path)) {
            var value = objectPath.get(state.keyValueStores, path);
            if (state.singleUseStores[path]) {
                this.clearSingleUseState(path);
            }
            if (state.ttlStores[path] && state.ttlStores[path] < Date.now()) {
                this.clearTtlState(path);
            }
            else {
                return clone(value);
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
        objectPath.set(state.listeners, path, f);
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
        objectPath.del(state.listeners, path);
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
        return objectPath.get(state.listeners, path);
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
            return objectHash(this.getState(path));
        }
        else {
            return objectHash(this.store.value);
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
        objectPath.set(state.keyValueStores, path, value);
        state.singleUseStores[path] = true;
        this.store.next(state);
    };
    StateStoreService.prototype.setTtlState = function (path, value, ttl) {
        this.clearKeyValueState(path);
        this.clearSingleUseState(path);
        var state = this.store.value;
        objectPath.set(state.keyValueStores, path, value);
        state.ttlStores[path] = ttl + Date.now();
        this.store.next(state);
    };
    StateStoreService.prototype.setKeyValueState = function (path, value) {
        this.clearTtlState(path);
        this.clearSingleUseState(path);
        var state = this.store.value;
        objectPath.set(state.keyValueStores, path, value);
        this.store.next(state);
    };
    StateStoreService.prototype.clearKeyValueState = function (path) {
        var state = this.store.value;
        if (objectPath.has(state.keyValueStores, path)) {
            objectPath.del(state.keyValueStores, path);
            this.store.next(state);
        }
    };
    StateStoreService.prototype.clearTtlState = function (path) {
        var state = this.store.value;
        if (objectPath.has(state.keyValueStores, path)) {
            objectPath.del(state.keyValueStores, path);
            this.store.next(state);
        }
        delete state.ttlStores[path];
    };
    StateStoreService.prototype.clearSingleUseState = function (path) {
        var state = this.store.value;
        if (objectPath.has(state.keyValueStores, path)) {
            objectPath.del(state.keyValueStores, path);
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
    return StateStoreService;
}());
export { StateStoreService };
StateStoreService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StateStoreService.ctorParameters = function () { return [
    null,
]; };
//# sourceMappingURL=state-store.service.js.map