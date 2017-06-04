import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { State } from '../models/state';
import { Subscription } from 'rxjs/Subscription';
export declare class StateStoreService {
    store: BehaviorSubject<State>;
    GC_INTERVAL: number;
    constructor(GC_INTERVAL?: number);
    /**
     * getState - returns the state object at path
     *
     * @param {string} path
     * @returns any
     *
     * @memberOf StateStoreService
     */
    getState(path: string): any;
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
    setState(path: string, value: any, limit?: boolean | number): void;
    /**
     * clearState - if path is provided, clears the staate at the given path location,
     *              if path not present, clears all state
     *
     * @param {string} [path]
     *
     * @memberOf StateStoreService
     */
    clearState(path?: string): void;
    /**
     * addListener - adds a listener function at a given path. When data changes at this path,
     *               the listener function will be called with 3 paramerters (path, value, limit)
     *
     * @param {string} path
     * @param {Function} f
     *
     * @memberOf StateStoreService
     */
    addListener(path: string, f: Function): void;
    /**
     * watchState - subscrives to state to watch changes
     *
     * @param {Observer} o
     *
     * @memberOf StateStoreService
     */
    watchState(o: Observer<State>): Subscription;
    /**
     * removeListener - removes the listener at a given path
     *
     * @param {string} path
     *
     * @memberOf StateStoreService
     */
    removeListener(path: string): void;
    /**
     * getListener - returns the listener for a given path or undefined
     *
     * @param {string} path
     * @returns {Function}
     *
     * @memberOf StateStoreService
     */
    getListener(path: string): Function | undefined;
    /**
     * getHash - if path is specified returns the hash of object at path,
     *           without path, it reutns the hash of all stored data.
     *
     * @param {string} path
     * @returns
     *
     * @memberOf StateStoreService
     */
    getHash(path?: string): string;
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
    getSize(path?: string): number;
    private clearAllState();
    private pathSize(path);
    private storeSize();
    private triggerListener(path, value, limit);
    private setSingleUseState(path, value);
    private setTtlState(path, value, ttl);
    private setKeyValueState(path, value);
    private clearKeyValueState(path);
    private clearTtlState(path);
    private clearSingleUseState(path);
    private collectGarbage();
}
