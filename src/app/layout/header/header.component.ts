import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
  cart: any[] = [];
  cartLength = 0;

  keyword = '';

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private lsService: LocalstorageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.userState.subscribe(userData => {
      this.isLoggedIn = this.authService.isAuthenticated();
    });

    this.cartService.cartData.subscribe((cart: any) => {
      this.cart = cart;

      this.calculateCartLength();
    });
  }

  calculateCartLength() {
    this.cartLength = 0;
    for(let i = 0; i < this.cart.length; i++) {
      this.cartLength += this.cart[i].quantity;
    }
    // console.log(this.cartLength);
  }

  onLogout(){
    this.lsService.removeItem('authData');
    // changing the auth service user info
    this.authService.checkUserState();
    // Route to login page
    this.router.navigate(['login']);
  }

  search() {
    // console.log(this.keyword);
    this.router.navigateByUrl('/search?q=' + this.keyword);
  }
}
