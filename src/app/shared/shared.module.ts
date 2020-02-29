import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DialogModule } from 'simple-ng-dialog';
import { DateSelectModule } from 'simple-ng-date-select';

import { PasswordDirective } from './directives/password.directive';

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
    PasswordDirective,
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    DialogModule,
    DateSelectModule,

    PasswordDirective,
  ],
})
export class SharedModule { }
