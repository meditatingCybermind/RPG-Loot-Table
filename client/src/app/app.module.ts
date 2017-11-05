import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from '../modules/main/main.module';
// import { MaterialModule } from '@angular/material';
// https://codeburst.io/angular-4-material-design-7b6975734ed6
// https://material.angular.io/guide/getting-started
// Material should be supported by Monday 11-6


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
