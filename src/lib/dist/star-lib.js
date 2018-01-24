import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

class StarComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
StarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'lib-star',
                template: `
    <p>
      I am going to create star 
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
StarComponent.ctorParameters = () => [];

class MoonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MoonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-moon',
                template: `
    <p>
      moon works! Hi moon here (- * -)
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
MoonComponent.ctorParameters = () => [];

class SunComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SunComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sun',
                template: `
    <p>
      sun works!
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
SunComponent.ctorParameters = () => [];

const components = [
    StarComponent,
    MoonComponent,
    SunComponent
];
class LibModule {
}
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
LibModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { LibModule, MoonComponent as ɵb, StarComponent as ɵa, SunComponent as ɵc };
//# sourceMappingURL=star-lib.js.map
