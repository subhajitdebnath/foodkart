import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { PreAuthComponent } from './pre-auth.component';


@NgModule({
  declarations: [
    PreAuthComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule
  ]
})
export class PreAuthModule { }
