import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as objectHash from 'object-hash';
import * as objectPath from 'object-path';
import * as clone from 'clone';
import { State } from './models/state';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class StateStoreService {

  public store: BehaviorSubject<State>;
  public GC_INTERVAL: number;

  constructor(GC_INTERVAL?: number) {
    this.store = new BehaviorSubject<State>(new State());
    this.GC_INTERVAL = GC_INTERVAL;
    if (GC_INTERVAL) { setInterval(() => this.collectGarbage(), GC_INTERVAL); }
  }

  /**
   * getState - returns the state object at path
   *
   * @param {string} path
   * @returns any
   *
   * @memberOf StateStoreService
   */
  public getState(path: string): any {

    const state = this.store.value;

    if (objectPath.has(state.keyValueStores, path)) {
      const value = objectPath.get(state.keyValueStores, path);
      if (state.singleUseStores[path]) {
        this.clearSingleUseState(path);
      }
      if (state.ttlStores[path] && state.ttlStores[path] < Date.now()) {
        this.clearTtlState(path);
      } else {
        return clone(value);
      }
    }
  }

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
  public setState(path: string, value: any, limit?: boolean | number): void {
    if (path && value) {
      this.triggerListener(path, value, limit);

      if (limit) {
        limit === true ? this.setSingleUseState(path, value) : this.setTtlState(path, value, <number>limit);
      } else {
        this.setKeyValueState(path, value);
      }
    }
  }

  /**
   * clearState - if path is provided, clears the staate at the given path location,
   *              if path not present, clears all state
   *
   * @param {string} [path]
   *
   * @memberOf StateStoreService
   */
  public clearState(path?: string): void {
    if (path) {
      this.clearKeyValueState(path);
    } else {
      this.clearAllState();
    }
  }

  /**
   * addListener - adds a listener function at a given path. When data changes at this path,
   *               the listener function will be called with 3 paramerters (path, value, limit)
   *
   * @param {string} path
   * @param {Function} f
   *
   * @memberOf StateStoreService
   */
  public addListener(path: string, f: Function): void {
    const state = this.store.value;
    objectPath.set(state.listeners, path, f);
    this.store.next(state);
  }

  /**
   * watchState - subscrives to state to watch changes
   *
   * @param {Observer} o
   *
   * @memberOf StateStoreService
   */
  public watchState(o: Observer<State>): Subscription {
    return this.store.subscribe(o);
  }

  /**
   * removeListener - removes the listener at a given path
   *
   * @param {string} path
   *
   * @memberOf StateStoreService
   */
  public removeListener(path: string): void {
    const state = this.store.value;
    objectPath.del(state.listeners, path);
    this.store.next(state);
  }

  /**
   * getListener - returns the listener for a given path or undefined
   *
   * @param {string} path
   * @returns {Function}
   *
   * @memberOf StateStoreService
   */
  public getListener(path: string): Function | undefined {
    const state = this.store.value;
    return objectPath.get(state.listeners, path);
  }

  /**
   * getHash - if path is specified returns the hash of object at path,
   *           without path, it reutns the hash of all stored data.
   *
   * @param {string} path
   * @returns
   *
   * @memberOf StateStoreService
   */
  public getHash(path?: string): string {
    if (path) {
      return objectHash(this.getState(path));
    } else {
      return objectHash(this.store.value);
    }
  }

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
  public getSize(path?: string): number {
    if (path) {
      return this.pathSize(path);
    } else {
      return this.storeSize();
    }
  }

  //////////////////////////////// private

  private clearAllState(): void {
    const state = this.store.value;
    state.keyValueStores = {};
    state.ttlStores = {};
    state.singleUseStores = {};
    state.listeners = {};
    this.store.next(state);
  }

  private pathSize(path: string): number {
    const state = this.store.value;
    const kv = JSON.stringify(this.getState(path) || '');
    return kv.length;
  }

  private storeSize(): number {
    const state = this.store.value;
    const kv = JSON.stringify(state.keyValueStores);
    return kv.length;
  }

  private triggerListener(path: string, value: any, limit: number | boolean): void {
    const f: Function = this.getListener(path);
    if (f) {
      f(path, value, limit);
    }
  }

  private setSingleUseState(path: string, value: any): void {
    this.clearKeyValueState(path);
    this.clearTtlState(path);
    const state = this.store.value;
    objectPath.set(state.keyValueStores, path, value);
    state.singleUseStores[path] = true;
    this.store.next(state);
  }

  private setTtlState(path: string, value: any, ttl: number): void {
    this.clearKeyValueState(path);
    this.clearSingleUseState(path);
    const state = this.store.value;
    objectPath.set(state.keyValueStores, path, value);
    state.ttlStores[path] = ttl + Date.now();
    this.store.next(state);
  }

  private setKeyValueState(path: string, value: any): void {
    this.clearTtlState(path);
    this.clearSingleUseState(path);
    const state = this.store.value;
    objectPath.set(state.keyValueStores, path, value);
    this.store.next(state);
  }

  private clearKeyValueState(path: string): void {
    const state = this.store.value;
    if (objectPath.has(state.keyValueStores, path)) {
      objectPath.del(state.keyValueStores, path);
      this.store.next(state);
    }
  }

  private clearTtlState(path: string): void {
    const state = this.store.value;
    if (objectPath.has(state.keyValueStores, path)) {
      objectPath.del(state.keyValueStores, path);
      this.store.next(state);
    }
    delete state.ttlStores[path];
  }

  private clearSingleUseState(path: string): void {
    const state = this.store.value;
    if (objectPath.has(state.keyValueStores, path)) {
      objectPath.del(state.keyValueStores, path);
      this.store.next(state);
    }
    delete state.ttlStores[path];
  }

  private collectGarbage(): void {
    const state = this.store.value;
    // tslint:disable-next-line:prefer-const
    for (let path in state.ttlStores) {
      if (state.ttlStores.hasOwnProperty(path)) {
        if (state.ttlStores[path] < Date.now()) {
          this.clearTtlState(path);
        }
      }
    }
  };

}
