import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class NoCacheInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const _internal = req.url.indexOf('dm-portal') !== -1;
    
    if (_internal) {
      const reqClone = req.clone({ headers: req.headers.set('Pragma', 'no-cache') });
      return next.handle(reqClone);
    } else {
      return next.handle(req);
    }

  }

}