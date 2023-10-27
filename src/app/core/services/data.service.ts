import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // user: any;
  //Get Api call 
  constructor(
    private http: HttpClient,
    private lsService: LocalstorageService
  ){
    // let auth = this.lsService.getItem('authData');
    // if(auth) {
    //   this.user = JSON.parse(auth);
    //   console.log(this.user.token);
    // }
  }

  //get Product
  getProduct(){
    // let headers = new HttpHeaders().set("Authorization", "Bearer " + this.user.token);
    return this.http.get('https://dummyjson.com/products');
  }

  //search Products
  searchProducts(keyword: string){
    // let headers = new HttpHeaders().set("Authorization", "Bearer " + this.user.token);
    return this.http.get('https://dummyjson.com/products/search?q=' + keyword);
  }
  
}
