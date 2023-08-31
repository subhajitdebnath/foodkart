import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAuthComponent } from './pre-auth.component';

const routes: Routes = [
  {
    path: '',
    component: PreAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreAuthRoutingModule { }
