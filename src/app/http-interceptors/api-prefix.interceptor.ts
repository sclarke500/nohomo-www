import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';



@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const _partial = req.url.indexOf('http') === -1;  // only prepend to partial (missing http) urls

    if (_partial) {
      const reqClone = req.clone({ url: environment.apiUrl + req.url });
      return next.handle(reqClone);
    } else {
      return next.handle(req);
    }

  }



}