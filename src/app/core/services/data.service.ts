import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cartData: any[] = [];

  refreshCart = new BehaviorSubject(this.cartData);

  constructor(
    private http: HttpClient
  ) { }

  addToCartData(food: any): void {
    this.cartData.push(food);
    this.refreshCart.next(this.cartData);

    // console.log(this.cartData);
  }

  getCartData(): any {
    return this.cartData;
  }

  getTodos() {
    return this.http.get('https://dummyjson.com/todos');
  }

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

}
