import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
var StarComponent = /** @class */ (function () {
    function StarComponent() {
    }
    /**
     * @return {?}
     */
    StarComponent.prototype.ngOnInit = function () {
    };
    return StarComponent;
}());
StarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'lib-star',
                template: "\n    <p>\n      I am going to create star \n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
StarComponent.ctorParameters = function () { return []; };
var MoonComponent = /** @class */ (function () {
    function MoonComponent() {
    }
    /**
     * @return {?}
     */
    MoonComponent.prototype.ngOnInit = function () {
    };
    return MoonComponent;
}());
MoonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-moon',
                template: "\n    <p>\n      moon works! Hi moon here (- * -)\n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
MoonComponent.ctorParameters = function () { return []; };
var SunComponent = /** @class */ (function () {
    function SunComponent() {
    }
    /**
     * @return {?}
     */
    SunComponent.prototype.ngOnInit = function () {
    };
    return SunComponent;
}());
SunComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sun',
                template: "\n    <p>\n      sun works!\n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
SunComponent.ctorParameters = function () { return []; };
var components = [
    StarComponent,
    MoonComponent,
    SunComponent
];
var LibModule = /** @class */ (function () {
    function LibModule() {
    }
    return LibModule;
}());
LibModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                exports: components,
                declarations: components,
                bootstrap: [],
                providers: [],
            },] },
];
/**
 * @nocollapse
 */
LibModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { LibModule, MoonComponent as ɵb, StarComponent as ɵa, SunComponent as ɵc };
//# sourceMappingURL=star-lib.es5.js.map
