import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  constructor ( 
    private router: Router,
  ) { }

  get token() {
    return sessionStorage.getItem('token');
  }

  set token(val) {
    sessionStorage.setItem('token', val);
  }

  get user() {
    return sessionStorage.getItem('user');
  }

  set user(val) {
    sessionStorage.setItem('user', val);
  }


  canActivate() {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  logoutOnErr() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
