import { NgModule } from '@angular/core';
import { StarComponent } from './star/star.component';
import { BrowserModule } from '@angular/platform-browser';
import { MoonComponent } from './moon/moon.component';
import { SunComponent } from './sun/sun.component';

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
