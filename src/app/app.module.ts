import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DialogService, DialogModule } from 'simple-ng-dialog';
import { NotificationService, NotificationModule } from 'simple-ng-notification';
import { DateSelectModule } from 'simple-ng-date-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { MatterComponent } from './matter/matter.component';

import { HttpInterceptorProviders } from './http-interceptors/interceptors';

import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DialogModule,
    NotificationModule,
    DateSelectModule,
    CoreModule.forRoot(),
    LoginModule,
  ],
  providers: [
    HttpInterceptorProviders,
    DialogService,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
