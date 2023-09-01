import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule) },
  { path: 'post', loadChildren: () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
