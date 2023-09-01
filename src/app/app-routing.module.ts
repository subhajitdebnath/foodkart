import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { PreAuthComponent } from './pre-auth/pre-auth.component';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule) 
  },
  { path: 'auth', 
    canActivate: [loginGuard], 
    component: PreAuthComponent,
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule) 
  },
  { path: 'user', 
    canActivate: [authGuard] , 
    loadChildren: () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
