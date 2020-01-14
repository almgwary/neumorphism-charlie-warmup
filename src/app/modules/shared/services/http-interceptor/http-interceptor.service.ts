import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor( ) { }

  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // how to update the request Parameters
    const updatedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Hello Charlie')
    });
    return next.handle(updatedRequest)
    .pipe(
      tap(
        httpEvent => {
          // logging the http response to browser's console in case of a success
          if (httpEvent instanceof HttpResponse) {
            console.log('api call success :', httpEvent);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (error instanceof HttpResponse) {
            console.log('api call error :', error);
          }
        }
      )
    );
  }
}
