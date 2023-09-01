import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = null;

  constructor() { }

  isAuthenticated(): boolean {
    if(this.user) {
      return true;
    }
    return false;
  }
}
