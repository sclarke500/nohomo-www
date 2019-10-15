import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Notification } from '@divorcemate/widgets';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {

  private busyCount = 0;

  constructor (
    private notification: Notification,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    this.busyCount += 1;
    setTimeout(() => {
      if (this.busyCount > 0) {
        this.notification.busy = true;
      }
    }, 300); 
    return next.handle(req).pipe(
      finalize(() => {
        this.busyCount -= 1;
        this.notification.busy = (this.busyCount > 1);
      })
    );

  }
  
}