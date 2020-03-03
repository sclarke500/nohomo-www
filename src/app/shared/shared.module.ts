import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DialogModule } from 'simple-ng-dialog';
import { DateSelectModule } from 'simple-ng-date-select';

import { AutoFocusDirective } from './directives/auto-focus.directive';
import { PasswordDirective } from './directives/password.directive';
import { ProvincesDirective } from './directives/provinces.directive';
import { PostalCodeDirective } from './directives/postal-code.directive';
import { TelephoneDirective } from './directives/telephone.directive';
import { NumDirective } from './directives/num.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DialogModule,
    DateSelectModule,
  ],
  declarations: [
    AutoFocusDirective,
    PasswordDirective,
    ProvincesDirective,
    PostalCodeDirective,
    TelephoneDirective,
    NumDirective,
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    DialogModule,
    DateSelectModule,

    AutoFocusDirective,
    PasswordDirective,
    ProvincesDirective,
    PostalCodeDirective,
    TelephoneDirective,
    NumDirective,
  ],
})
export class SharedModule { }
