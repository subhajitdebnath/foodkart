import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = null;

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean {
    if(this.user) {
      return true;
    }
    return false;
  }

  login(payload: any) {
    return this.http.post('https://dummyjson.com/auth/login', payload);
  }


}
