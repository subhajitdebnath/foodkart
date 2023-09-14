import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './core/guards/login.guard';
import { PreAuthComponent } from './pre-auth/pre-auth.component';
import { AuthIndependentComponent } from './auth-independent/auth-independent.component';
import { userGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', 
    component: AuthIndependentComponent,
    loadChildren: () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule) 
  },
  { path: 'login', 
    canActivate: [loginGuard], 
    component: PreAuthComponent,
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule) 
  },
  { path: 'user', 
    canActivate: [userGuard], 
    loadChildren: () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
