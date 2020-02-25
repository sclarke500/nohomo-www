import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NotificationService } from 'simple-ng-notification';
import { AuthService } from '../core/auth.service';

const customErrors = ['Duplicate Email'];

@Injectable()
export class ErrInterceptor implements HttpInterceptor {

  constructor (
    private notification: NotificationService,
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
    console.log(error)
    const msg =  (error.error && error.error.message) ? error.error.message : 'Server error';
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
