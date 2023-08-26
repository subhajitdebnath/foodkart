import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterComponent } from './filter/filter.component';
import { SelectedFoodComponent } from './selected-food/selected-food.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FoodListComponent,
    FilterComponent,
    SelectedFoodComponent,
    HeaderComponent,
    ContactusComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
