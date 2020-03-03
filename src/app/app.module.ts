import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DialogService } from 'simple-ng-dialog';
import { NotificationService, NotificationModule } from 'simple-ng-notification';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MatterModule } from './matter/matter.module';

import { HttpInterceptorProviders } from './http-interceptors/interceptors';

import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NotificationModule,
    CoreModule.forRoot(),
    SharedModule,
    LoginModule,
    HomeModule,
    MatterModule,
  ],
  providers: [
    HttpInterceptorProviders,
    DialogService,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
