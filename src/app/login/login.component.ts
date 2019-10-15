import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.less']
})
export class LoginComponent {

  creds = {
    email: '',
    password: '',
  }

  constructor (
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) { }

  login() {
    this.http.post('login', this.creds).subscribe((resp: any) => {
      this.authService.token = resp.token;
      this.authService.user = resp.user;
      this.router.navigate(['']);
    })
  }
  
}