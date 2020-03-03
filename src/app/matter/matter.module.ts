import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MatterComponent } from './matter.component';
import { MatterDetailComponent } from './matter-detail.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MatterComponent,
    MatterDetailComponent,
  ],
  exports: [
    MatterComponent,
  ],
  providers: [

  ],
})
export class MatterModule { }

