/* tslint:disable:no-unused-vars */
import { getTestBed, TestBed, inject, async } from '@angular/core/testing';
import { StateStoreService } from './state-store.service';
import { Observer } from 'rxjs/Observer';

const StateStoreServiceFactory = () => {
    return new StateStoreService(200);
};

export let StateStoreServiceProvider = { provide: StateStoreService, useFactory: StateStoreServiceFactory };

describe('StateStoreService', () => {
    let service: StateStoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StateStoreServiceProvider]
        });
        service = getTestBed().get(StateStoreService);
    });

    it('Should ...', inject([StateStoreService], () => {
        expect(service).toBeTruthy();
    }));
    it('Be able to set and retrieve state by path',
        inject([StateStoreService], () => {
            service.setState('foo', 'bar');
            expect(service.getState('foo')).toBe('bar');
            service.setState('bar', 'baz');
            expect(service.getState('bar')).toBe('baz');
        }));

    it('Saved state should be immune from side effects',
        inject([StateStoreService], () => {
            const x = 'bar44';
            service.setState('fooBaz', x);
            expect(service.getState('fooBaz')).toBe('bar44');
            expect(service.getState('fooBaz')).toBe('bar44');
            service.clearState('fooBaz');
            expect(service.getState('fooBaz')).toBeUndefined();
        }));

    it('Data in store to be safe from external modification',
        inject([StateStoreService], () => {
            const num1 = 1234;
            const num2 = 5678;
            service.setState('baz44', { bar: num1 });
            const result: MockState = service.getState('baz44');
            expect(result).toEqual({ bar: num1 });
            // attempt to change without setter
            result.bar = num2;
            // local change good
            expect(result).toEqual({ bar: num2 });
            // stored value unchanged
            expect(service.getState('baz44')).toEqual({ bar: num1 });
            service.clearState('baz44');
        })
    );
    it('Each time data at the same path is retreived, the value return should be the same',
        inject([StateStoreService], () => {
            service.setState('foo', 'bar');
            expect(service.getState('foo')).toEqual('bar');
            expect(service.getState('foo')).toEqual('bar');
            service.setState('bar', 'baz');
            expect(service.getState('bar')).toEqual('baz');
            expect(service.getState('bar')).toEqual('baz');
        })
    );
    it('Should be able to clear state by path',
        inject([StateStoreService], () => {
            service.setState('foo', 'bar');
            expect(service.getState('foo')).toEqual('bar');
            service.clearState('foo');
            expect(service.getState('foo')).toBeUndefined();
            expect(typeof service.getState('foo')).toEqual('undefined');
        })
    );
    it('Should be able to clear all state',
        inject([StateStoreService], () => {
            service.setState('foo', 'bar');
            expect(service.getState('foo')).toEqual('bar');
            service.clearState();
            const expectedSize = 2;
            expect(service.getSize()).toEqual(expectedSize);
        })
    );
    it('Should be able to set complex objects and retrieve state by deep paths',
        inject([StateStoreService], () => {
            const num = 1234;
            service.setState('foo', { bar: { baz: num } });
            expect(service.getState('foo.bar.baz')).toEqual(num);
        })
    );
    it('Should be able to set single use objects, that can be retrieved once',
        inject([StateStoreService], () => {
            service.setState('foo', 'bar-baz-bim', true);
            const result = service.getState('foo');
            expect(result).toEqual('bar-baz-bim');
            const result2 = service.getState('foo');
            expect(typeof result2).toEqual('undefined');
            expect(result2).toBeUndefined();
        })
    );
    it('Should be able to set ttl objects, that can be retrieved until ttl expires',
        async(inject([StateStoreService], () => {
            const limit = 500;
            service.setState('foo2', { bar: { baz: 1234 } }, limit);
            const value = service.getState('foo2');
            expect(JSON.stringify(value)).toEqual(JSON.stringify({ bar: { baz: 1234 } }));

            const getData = () => {
                return new Promise((resolve: Function) => {
                    const timer = setTimeout(() => {
                        resolve(service.getState('foo2'));
                    }, limit * 2);
                });
            };

            getData().then((result: DeepMockState) => {
                expect(typeof JSON.stringify(result)).toEqual('undefined');
            });

        }))
    );
    it('ttl objects should be cleared even if not retrieved...',
        async(inject([StateStoreService], () => {
            const limit = 500;
            service.setState('foo2', { bar: { baz: 1234 } }, limit);
            const dirtySize = service.getSize('foo2');
            const value = service.getState('foo2');
            expect(JSON.stringify(value)).toEqual(JSON.stringify({ bar: { baz: 1234 } }));
            expect(dirtySize).toEqual(20);
            const checkSize = () => {
                return new Promise((resolve: Function) => {
                    const timer = setTimeout(() => {
                        resolve(service.getSize('foo2'));
                    }, limit * 2);
                });
            };

            checkSize().then((result: number) => {
                expect(result).toEqual(0);
            });

        }))
    );
    it('Should be able use watchState to subscribe to state changes',
        inject([StateStoreService], () => {
            let results = '';
            const report = (m: string) => {
                results += m;
            };

            const observer: Observer<Object> = {
                next: (x: Object) => report('Observer got a next state value: ' + JSON.stringify(x)),
                error: (err: string) => report('Observer got a state error: ' + err),
                complete: () => report('Observer got a complete notification'),
            };
            const watched = service.watchState(observer);

            service.clearState(); // clear state so no timestamps in output for next test...
            service.setState('foo9', 'bar', true);
            service.setState('foo8', 'bar-baz');

            expect(results).toEqual(
                // tslint:disable-next-line:max-line-length
                `Observer got a next state value: {"keyValueStores":{},"ttlStores":{},"singleUseStores":{},"listeners":{}}Observer got a next state value: {"keyValueStores":{},"ttlStores":{},"singleUseStores":{},"listeners":{}}Observer got a next state value: {"keyValueStores":{"foo9":"bar"},"ttlStores":{},"singleUseStores":{"foo9":true},"listeners":{}}Observer got a next state value: {"keyValueStores":{"foo9":"bar","foo8":"bar-baz"},"ttlStores":{},"singleUseStores":{"foo9":true},"listeners":{}}`);
        })
    );
    it('watchState returns a subscription which can be unsubscribed...',
        inject([StateStoreService], () => {
            let results = '';
            const report = (m: string) => {
                results += m;
            };

            const observer: Observer<Object> = {
                next: (x: Object) => report('Observer got a next state value: ' + JSON.stringify(x)),
                error: (err: string) => report('Observer got a state error: ' + err),
                complete: () => report('Observer got a complete notification'),
            };
            const watched = service.watchState(observer);

            expect(typeof watched.unsubscribe).toBe('function');
        })
    );
    it('Should be able to retrieve hash of state by path',
        inject([StateStoreService], () => {
            service.setState('asdf', 'bar');
            expect(service.getHash('asdf')).toEqual('8a0dd3398902af136d02e2fee5ad0d721032f359');
        })
    );
    it('Should order of elements in a complex object should not change hash',
        inject([StateStoreService], () => {
            service.setState('asdf', { bar: 1, baz: 2 });
            let hash: string = service.getHash('asdf');
            expect(service.getHash('asdf')).toEqual(hash);
            service.setState('asdf', { bar: 2, baz: 1 });
            hash = service.getHash('asdf');
            expect(service.getHash('asdf')).toEqual(hash);
        })
    );
    it('Should addListener adds a listener to a path',
        inject([StateStoreService], () => {
            service.addListener('asdf', (k: string, v: Function) => {
                console.log('changed-key:', k, '=>', v);
            });

            expect(service.getListener('asdf').toString().replace(/\s/g, ''))
                .toEqual('function(k,v){console.log(\'changed-key:\',k,\'=>\',v);}');
        })
    );
    it('Should getListener allows one to retrieve the listener for a path',
        inject([StateStoreService], () => {
            expect(service.getListener('asdf')).toBeUndefined();
            service.addListener('asdf', () => {
                return null;
            });
            expect(typeof service.getListener('asdf')).toEqual('function');
        })
    );
    it('Should removeListener allows one to remove a listener to a path',
        inject([StateStoreService], () => {
            service.removeListener('asdf');
            expect(typeof service.getListener('asdf')).toEqual('undefined');
            expect(service.getListener('asdf')).toBeUndefined();
        })
    );
    it('Should getListener returns undefined when listener for a path does not exist',
        inject([StateStoreService], () => {
            expect(typeof service.getListener('asdf')).toEqual('undefined');
            expect(service.getListener('asdf')).toBeUndefined();
        })
    );
    it('Should when a listener exists on a path, it is notified of changes to that path',
        inject([StateStoreService], () => {

            let results = '';

            const report = (a: string, b: string, c: string, d: Function) => {
                results = results + a + b + c + d;
            };

            service.addListener('asdf', (k: string, v: Function) => {
                report('changed-key:', k, '=>', v);
            });
            service.setState('asdf', 'foo');
            service.setState('asdf', 'bar');
            service.setState('asdf', 'baz');
            expect(results).toEqual('changed-key:asdf=>foochanged-key:asdf=>barchanged-key:asdf=>baz');
        })
    );
    it('Should getSize(foo2) returns size of an object at a path whithin state-store',
        inject([StateStoreService], () => {
            service.setState('asdf2', 'barbimbaz');
            service.setState('asdf3', 'bim');
            const size: number = service.getSize('asdf2');
            const expectedSize = 11;
            expect(size).toEqual(expectedSize);
        })
    );

    afterAll(inject([StateStoreService], () => {
        service.setState('asdf', 'bar');
        expect(service.getHash('asdf')).toEqual('8a0dd3398902af136d02e2fee5ad0d721032f359');
    }));
});

// Mock & Helpers
interface MockState {
    bar: number;
    baz?: number;
}

interface DeepMockState {
    bar: {
        baz: number;
    };
}
