"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var lib_component_1 = require("./lib.component");
describe('LibComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [lib_component_1.LibComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(lib_component_1.LibComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h2'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h2> text', function () {
        fixture.detectChanges();
        var h2 = de.nativeElement;
        expect(h2.innerText).toMatch(/angular/i, '<h2> should say something about "Angular"');
    });
});
//# sourceMappingURL=lib.component.spec.js.map