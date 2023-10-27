import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  user: any;
  token: any;
  constructor(
    private lsService: LocalstorageService
  ){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let auth = this.lsService.getItem('authData');
    if(auth) {
      this.user = JSON.parse(auth);
      this.token = this.user.token;
      // console.log(this.user.token);
    }
    const modifiedRequest = request.clone({
      headers: request.headers.append("Authorization", "Bearer " + this.token)
    });
    return next.handle(modifiedRequest);
  }
}
