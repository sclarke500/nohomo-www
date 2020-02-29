import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { FirmDetailComponent } from './firm-detail.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    FirmDetailComponent,
  ],
  exports: [
    HomeComponent,
  ],
  providers: [

  ],
})
export class HomeModule { }

