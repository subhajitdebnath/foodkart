import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Get Api call 
  constructor(private http: HttpClient){ }

  //get Product
  getProduct(){
    return this.http.get('https://dummyjson.com/products');
  }

  //search Products
  searchProducts(keyword: string){
    return this.http.get('https://dummyjson.com/products/search?q=' + keyword);
  }
  
}
