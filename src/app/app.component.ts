import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // foods = [
  //   {
  //     id: 1,
  //     name: 'Breads',
  //     price: 100,
  //     quantity: 5
  //   },
  //   {
  //     id: 1,
  //     name: 'Meat',
  //     price: 200,
  //     quantity: 4
  //   },
  //   {
  //     id: 1,
  //     name: 'Salad',
  //     price: 300,
  //     quantity: 2
  //   },
  //   {
  //     id: 1,
  //     name: 'Pizza',
  //     price: 400,
  //     quantity: 10
  //   }
  // ]

  //Set value for price and quantity
  // allFoods: any[] = [];
  // selectedFood: any = null;
  // constructor() {
    
  // }

  // ngOnInit() {
  //   this.allFoods = this.foods;
  // }

  // selectFood(event: any) {
  //   console.log(event);
  //   this.selectedFood = event;
  // }

  // applyFilter(filterData: any) {
  //     this.foods = this.foods.filter((food: any) => {
  //     return food.price >= filterData.minValue && food.price <= filterData.maxValue ||
  //     food.quantity >= filterData.minValue && food.quantity <= filterData.maxValue;
  //   })
  //   // console.log(filterData.minValue);
  //   // console.log(filterData.maxValue);
    
  // }

  // resetFilter() {
  //   this.foods = this.allFoods;
  //   this.selectedFood = null;
  // }

}
