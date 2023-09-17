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
  counter: number = 1;

  constructor(
    private cartService: CartService,
    private lsService: LocalstorageService
  ) {}

  ngOnInit() {
    this.cartService.cartData.subscribe((cart: any) => {
      console.log(cart);
      this.cartItems = cart;
    let cartData = this.lsService.getItem('cartData');
    if(cartData){
     this.cartItems = JSON.parse(cartData);
     console.log(this.cartItems);
      }
      else{
        this.cartItems = [];
      }
    });
  }

  removeItem(index: number) {
    console.log(this.cartItems[index]);
    this.cartService.remove(this.cartItems[index]);
  }

  increment(id:any){
    this.counter +=1;  
     for(let i=0; i<this.cartItems.length;i++){
  if (this.cartItems[i].id === id){
     //this.counter += this.cartItems[i].id;
  }
  }

  }
  decrement(){
    if (this.counter<= 1){
      this.counter = 1;
    }
    else{
      this.counter -=1;
    }
  }
}
