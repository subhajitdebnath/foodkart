import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAuthComponent } from './post-auth.component';

const routes: Routes = [
  {
    path: '',
    component: PostAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
