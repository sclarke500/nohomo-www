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

import { MatterComponent } from './matter/matter.component';

import { HttpInterceptorProviders } from './http-interceptors/interceptors';

import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    MatterComponent,
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
  ],
  providers: [
    HttpInterceptorProviders,
    DialogService,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
