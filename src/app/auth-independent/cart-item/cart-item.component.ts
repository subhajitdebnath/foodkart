import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.cartService.cartData.subscribe((cart: any) => {
      console.log(cart);
      this.cartItems = cart;
    });
  }

  removeItem(index: number) {
    console.log(this.cartItems[index]);
    this.cartService.remove(this.cartItems[index]);
  }

}
