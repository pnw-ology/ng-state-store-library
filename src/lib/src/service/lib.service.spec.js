"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var lib_service_1 = require("./lib.service");
describe('LibService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [lib_service_1.LibService]
        });
    });
    it('should create service', testing_1.inject([lib_service_1.LibService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should return 42 from getMeaning', testing_1.inject([lib_service_1.LibService], function (service) {
        expect(service.getMeaning()).toBe(42);
    }));
});
//# sourceMappingURL=lib.service.spec.js.map