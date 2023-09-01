import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthIndependentRoutingModule } from './auth-independent-routing.module';
import { AuthIndependentComponent } from './auth-independent.component';


@NgModule({
  declarations: [
    AuthIndependentComponent
  ],
  imports: [
    CommonModule,
    AuthIndependentRoutingModule
  ]
})
export class AuthIndependentModule { }
