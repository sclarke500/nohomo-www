/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';
import { NoCacheInterceptor } from './no-cache-interceptor';
import { ErrInterceptor } from './err-interceptor';
import { BusyInterceptor } from './busy-interceptor';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';

/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NoCacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true },
];
