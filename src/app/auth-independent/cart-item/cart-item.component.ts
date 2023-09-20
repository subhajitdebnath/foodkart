import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  cartItems: any[] = [];
  totalPrice : number = 0;
  constructor(
    private cartService: CartService,
    private lsService: LocalstorageService,
    private router:Router
  ) {}

  ngOnInit() {
    this.cartService.cartData.subscribe((cart: any) => {
      console.log(cart);
      this.cartItems = cart;
      this.totalPrice = this.cartService.getTotalPrice(); 
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

 checkout(){
  this.lsService.setItem('cartData', JSON.stringify(this.cartItems)); 
  this.router.navigate(['checkout']);
  }
}
