import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  } from '@angular/common';

import { AppComponent } from './app.component';

import { MainLightComponent } from '../components/main-light/main-light.component';
import { MainDarkComponent } from '../components/main-dark/main-dark.component';

import { ToggleService } from '../services/toggleService.service';


@NgModule({
  declarations: [
    AppComponent,
    MainLightComponent,
    MainDarkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
