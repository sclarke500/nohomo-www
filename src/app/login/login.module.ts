import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ForgotComponent } from './forgot.component';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
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
