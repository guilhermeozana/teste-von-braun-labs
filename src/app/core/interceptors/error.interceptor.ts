import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MessageService } from 'src/app/shared/services/message.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService,
              private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (!environment.production) {
          console.log(err);
        }

        let errorMsg = '';
        console.log(err)

        if(err.error == null) {
          errorMsg = `${err.status} - ${err.statusText}`;

        } else if (err.error instanceof ErrorEvent) {
          errorMsg = `${err.error.message}`;

        } else if (err.error.message) {
          errorMsg = `${err.status} - ${err.error.message}`;

        } else if (Array.isArray(err.error) && err.error.length) {
          errorMsg = `${err.error[0]}`;

        } else if (Array.isArray(err.error.error)) {
          errorMsg = `${err.status} - ${err.error.error[0]}`

        } else if (typeof err.error === 'object') {
          errorMsg = `${err.status} - ${err.error.title}`

        } else {
          errorMsg = `${err.status} - ${err.error.error[0]}`

        }

        this.messageService.showErrorMessage(errorMsg, 5000);

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
