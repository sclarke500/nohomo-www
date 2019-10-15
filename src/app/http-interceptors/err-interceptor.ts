import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Notification } from '@divorcemate/widgets';
import { AuthService } from '../core/auth.service';

const customErrors = ['Duplicate Email'];

@Injectable()
export class ErrInterceptor implements HttpInterceptor {

  constructor (
    private notification: Notification,
    private authService: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(this.handleError)
    );

  }

  private handleError = (error: HttpErrorResponse) => {
    this.notification.busy = false;
    const msg =  error.message || 'Server error';
    if (error.status === 401 || msg === 'TokenInvalidated') {
      this.authService.logoutOnErr();
      return([]);
    } else {
      if (customErrors.indexOf(msg) == -1) {
        this.notification.notify(msg);
      }
      return throwError(msg);
    }
  }


}
