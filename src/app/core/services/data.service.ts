import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cartData: any[] = [];

  refreshCart = new BehaviorSubject(this.cartData);

  constructor() { }

  addToCartData(food: any): void {
    this.cartData.push(food);
    this.refreshCart.next(this.cartData);

    // console.log(this.cartData);
  }

  getCartData(): any {
    return this.cartData;
  }

}
