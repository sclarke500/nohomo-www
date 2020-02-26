import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ForgotComponent } from './forgot.component';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    ResetPasswordComponent,
  ],
  providers: [

  ],
  exports: [
  ],
})
export class LoginModule { }
