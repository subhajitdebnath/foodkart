import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = {
    id: 1,
    name: 'abc'
  };

  constructor() { }

  isAuthenticated(): boolean {
    if(this.user) {
      return true;
    }
    return false;
  }
}
