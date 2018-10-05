import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ContentComponent } from '../components/content/content.component';
import { ModernViewComponent } from '../components/content/modern-view/modern-view.component';
import { TableViewComponent } from '../components/content/table-view/table-view.component';
import { AddNewComponent } from '../components/content/add-new/add-new.component';

import { SidebarToggleService } from '../services/sidebarToggleService.service';
import { DataService } from '../services/dataService.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    ModernViewComponent,
    TableViewComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ChartsModule,
    FormsModule
  ],
  providers: [
    SidebarToggleService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
