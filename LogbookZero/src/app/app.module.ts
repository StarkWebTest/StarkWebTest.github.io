import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MainComponent } from '../components/main.component';
import { DataViewComponent } from '../components/data-view/data-view.component';
import { TableViewComponent } from '../components/table-view/table-view.component';
import { SidenavViewComponent } from '../components/sidenav-view/sidenav-view.component';
import { LoginViewComponent } from '../components/login-view/login-view.component';

import { UserService } from '../services/user.service';
import { HttpErrorHandler } from '../services/HttpErrorHandler.service';
import { MessageService } from '../services/message.service';

const ROUTES: Route[] = [
  {
    path: '',
    component: LoginViewComponent
  },
  {
    path: 'home',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DataViewComponent,
    TableViewComponent,
    SidenavViewComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
    UserService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
