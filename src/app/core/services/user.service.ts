import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean = true;
  user = {
    name: 'John Doe'
  };

  constructor() { }
}
