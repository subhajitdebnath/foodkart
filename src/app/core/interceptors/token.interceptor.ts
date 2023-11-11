import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  user: any;
  token: any;
  constructor(
    private lsService: LocalstorageService
  ){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request.headers.keys());
    let modifiedRequest;
    if(request.headers.keys().includes('skipToken')) {
      modifiedRequest = request.clone({
        headers: request.headers.delete("skipToken")
      });

    } else {
      let auth = this.lsService.getItem('authData');
      if(auth) {
        this.user = JSON.parse(auth);
        this.token = this.user.token;
        // console.log(this.user.token);
      }
      modifiedRequest = request.clone({
        headers: request.headers.append("Authorization", "Bearer " + this.token)
      });
    }
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        if(event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
