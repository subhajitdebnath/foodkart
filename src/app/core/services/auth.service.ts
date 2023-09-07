import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = null;

  public userState = new BehaviorSubject(this.user);

  constructor(
    private http: HttpClient,
    private lsService: LocalstorageService,
  ) {
    this.checkUserState();
  }

  isAuthenticated(): boolean {
    if(this.user) {
      return true;
    }
    return false;
  }

  checkUserState() {
    let auth = this.lsService.getItem('authData');
    if(auth) {
      // console.log(JSON.parse(auth));
      this.user = JSON.parse(auth);
      this.userState.next(this.user);
    }
  }

  login(payload: any) {
    return this.http.post('https://dummyjson.com/auth/login', payload);
  }


}
