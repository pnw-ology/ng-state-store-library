import { inject, TestBed } from '@angular/core/testing';

import { StateStoreService } from './state-store.service';

describe('StateStoreService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StateStoreService
            ]
        });
    });

    it('should have echo method',
        inject([StateStoreService],
            (service: StateStoreService) => {
                expect(typeof service.echo).toEqual('function');
            })
    );

});
