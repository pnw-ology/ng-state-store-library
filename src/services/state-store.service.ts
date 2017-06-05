import { Injectable } from '@angular/core';

@Injectable()
export class StateStoreService {
    constructor() {
        // add logic here
        console.log('state-store-service invoked!');
    }

    public echo (x:string) : string {
        return x;
    }
}
