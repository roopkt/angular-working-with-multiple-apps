import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LibModule } from 'star-lib';
import { AddstarComponent } from './addstar/addstar.component';
import { UseSunComponent } from './use-sun/use-sun.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstarComponent,
    UseSunComponent,
  ],
  imports: [
    BrowserModule, LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DemoAppModule { }
