import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ContentComponent } from '../components/content/content.component';
import { AmericanComponent } from '../components/content/american/american.component'; 


import { ToggleService } from '../services/toggleService.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    AmericanComponent
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
