import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  } from '@angular/common';

import { AppComponent } from './app.component';

import { MainComponent } from '../components/main/main.component';

import { ToggleService } from '../services/toggleService.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    
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
