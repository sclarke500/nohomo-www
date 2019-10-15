import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './core/auth.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { HomeComponent } from './home/home.component';
import { MatterComponent } from './matter/matter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthService],
  },
  {
    path: 'matter/:matterId',
    component: MatterComponent,
    canActivate: [AuthService],
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
