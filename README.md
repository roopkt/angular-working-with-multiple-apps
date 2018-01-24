# Working with multiple apps
This project is using angular cli to create angular app and trying to demonstrate how can we create our custom library and use it in demo application.

### Working in lib app
#### add new module in lib folder
```
ng g m lib --app=lib
```
#### add new component in lib folder
```
ng g c sun --app=lib
```

Once you created any reusable component please do not forgot to export it.
```typescript
const components = [
  StarComponent,
  MoonComponent,
  SunComponent
];

@NgModule({
  imports: [BrowserModule],
  exports: components,
  declarations: components,
  bootstrap: [
  ],
  providers: [
  ],
})

export class LibModule { }
```

### Working in demo app
#### add new component in demo-app folder
```
ng g c use-sun --app=demo-app
```

### After any lib changes 
Once you have done any changes to lib app and try to build and see the changes you can run ```npm start```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.