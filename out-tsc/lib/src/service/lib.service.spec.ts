import { TestBed, inject } from '@angular/core/testing';

import { StateStoreService } from './lib.service';

describe('StateStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateStoreService]
    });
  });

  it('should create service', inject([StateStoreService], (service: StateStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([StateStoreService], (service: StateStoreService) => {
    expect(service.getMeaning()).toBe(42);
  }));
});
