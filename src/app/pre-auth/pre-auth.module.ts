import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { PreAuthComponent } from './pre-auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    PreAuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PreAuthModule { }
