import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor (
    private authService: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const _token = this.authService.token;
    const _internal = true // req.url.indexOf('dm-portal') !== -1;

    if (_token && _internal) {
      const reqClone = req.clone({ setHeaders: { authorization: _token } });
      return next.handle(reqClone);
    } else  {
      return next.handle(req);
    }

  }

}
