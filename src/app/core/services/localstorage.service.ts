import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  getItem(key: any) {
    return localStorage.getItem(key);
  }
  removeItem(key:any){
    return localStorage.removeItem(key);
  }
}
