import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthIndependentRoutingModule } from './auth-independent-routing.module';
import { AuthIndependentComponent } from './auth-independent.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [
    AuthIndependentComponent,
    ProductListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    AuthIndependentRoutingModule
  ]
})
export class AuthIndependentModule { }
