import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthIndependentRoutingModule } from './auth-independent-routing.module';
import { AuthIndependentComponent } from './auth-independent.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAddressComponent } from './add-address/add-address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './product-list/search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { PrimengComponent } from './primeng/primeng.component';
import { TableModule } from 'primeng/table';
import { NgrxComponent } from './ngrx/ngrx.component';
import { CounterViewComponent } from './ngrx/counter-view/counter-view.component';
import { CounterControlComponent } from './ngrx/counter-control/counter-control.component';

@NgModule({
  declarations: [
    AuthIndependentComponent,
    ProductListComponent,
    CartItemComponent,
    AddAddressComponent,
    CheckoutComponent,
    SearchComponent,
    SearchResultComponent,
    PrimengComponent,
    NgrxComponent,
    CounterViewComponent,
    CounterControlComponent
  ],
  imports: [
    CommonModule,
    AuthIndependentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    TableModule
  ]
})
export class AuthIndependentModule { }