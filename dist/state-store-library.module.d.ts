import { StateStoreService } from './services/state-store.service';
export declare class StateStoreLibraryModule {
    static forRoot(): {
        ngModule: typeof StateStoreLibraryModule;
        providers: typeof StateStoreService[];
    };
}
