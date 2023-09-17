import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  cartItems: any[] = [];
  constructor(
    private cartService: CartService,
    private lsService: LocalstorageService
  ) {}

  ngOnInit() {
    this.cartService.cartData.subscribe((cart: any) => {
      console.log(cart);
      this.cartItems = cart;
    // let cartData = this.lsService.getItem('cartData');
    // if(cartData){
    //  this.cartItems = JSON.parse(cartData);
    //  console.log(this.cartItems);
    //   }
    //   else{
    //     this.cartItems = [];
    //   }
    });
  }

  removeItem(index: number) {
    this.cartService.remove(this.cartItems[index]);
  }

  increment(index: number){
    this.cartService.add(this.cartItems[index]);
  }
  decrement(index: number){
    this.cartService.decrement(index);
  }
}
