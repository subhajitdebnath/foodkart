import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = [];

  cartData = new BehaviorSubject(this.cart);

  constructor(
    private lsService: LocalstorageService,
  ) {
    this.checkCartState();
  }

  checkCartState() {
    let cartData = this.lsService.getItem('cartData');
    if(cartData) {
      this.cart = JSON.parse(cartData);
    } else {
      this.cart = [];
    }
    this.cartData.next(this.cart);
  }

  add(product: any) {
    this.cart.push(product);
    this.lsService.setItem('cartData', JSON.stringify(this.cart));
    this.cartData.next(this.cart);
  }

  remove(product: any) {
    this.cart = this.cart.filter(item => item.id !== product.id);
    this.lsService.setItem('cartData', JSON.stringify(this.cart));
    this.cartData.next(this.cart);
  } 
}
