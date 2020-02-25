import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { GlobalService } from './global.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    GlobalService,
    AuthService,
  ],
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        GlobalService,
        AuthService,
     ]
      };
  }

}
