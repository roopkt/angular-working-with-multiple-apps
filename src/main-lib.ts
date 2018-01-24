import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { LibModule } from '@cmlib/src';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LibModule)
  .catch(err => console.log(err));
