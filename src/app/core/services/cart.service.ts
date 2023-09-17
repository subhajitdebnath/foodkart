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
    // check if product already exists in the cart
    const index = this.cart.findIndex(prod => prod.id === product.id);
    if(index >= 0) { // if product already exists in the cart
      // console.log(this.cart[index]);
      this.cart[index].quantity += 1;
    } else { // if product don't exist in the cart
      product['quantity'] = 1;
      this.cart.push(product);
    }

    this.lsService.setItem('cartData', JSON.stringify(this.cart));
    this.cartData.next(this.cart);
  }

  remove(product: any) {
    this.cart = this.cart.filter(item => item.id !== product.id);
    this.lsService.setItem('cartData', JSON.stringify(this.cart));
    this.cartData.next(this.cart);
  }

  decrement(cartIndex: number) {
    if(this.cart[cartIndex].quantity > 1) {
      this.cart[cartIndex].quantity -= 1;
    } else {
      this.cart.splice(cartIndex, 1);
    }

    this.lsService.setItem('cartData', JSON.stringify(this.cart));
    this.cartData.next(this.cart);
  }
}
