import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TodoComponent } from './todo/todo.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FoodListComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
