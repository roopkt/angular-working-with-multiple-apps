(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser'], factory) :
	(factory((global['star-lib'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,core,platformBrowser) { 'use strict';

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
    { type: core.Component, args: [{
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
    { type: core.Component, args: [{
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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [platformBrowser.BrowserModule],
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

exports.LibModule = LibModule;
exports.ɵb = MoonComponent;
exports.ɵa = StarComponent;
exports.ɵc = SunComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=star-lib.umd.js.map
