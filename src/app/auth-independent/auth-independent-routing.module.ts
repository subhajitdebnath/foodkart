import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartItemComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'address',
    component: AddAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthIndependentRoutingModule { }
