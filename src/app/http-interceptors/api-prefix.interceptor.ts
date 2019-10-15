import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// const apiUrl = 'https://nohomo-api.herokuapp.com/';
const apiUrl = 'http://localhost:3305/';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const _partial = req.url.indexOf('http') === -1;  // only prepend to partial (missing http) urls

    if (_partial) {
      const reqClone = req.clone({ url: apiUrl + req.url });
      return next.handle(reqClone);
    } else {
      return next.handle(req);
    }

  }



}