import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  foods = [
    {
      id: 1,
      name: 'Breads',
      price: 100,
      quantity: 5
    },
    {
      id: 1,
      name: 'Meat',
      price: 200,
      quantity: 4
    },
    {
      id: 1,
      name: 'Salad',
      price: 300,
      quantity: 2
    },
    {
      id: 1,
      name: 'Pizza',
      price: 400,
      quantity: 10
    }
  ]

  minPrice = 0;
  maxPrice = 0;

  allFoods: any[] = [];

  selectedFood: any = null;

  constructor() {
    
  }

  ngOnInit() {
    this.allFoods = this.foods;
  }

  selectFood(event: any) {
    console.log(event);
    this.selectedFood = event;
  }

  applyFilter(minPrice: number, maxPrice: number) {
    this.foods = this.foods.filter((food: any) => {
      return food.price >= minPrice && food.price <= maxPrice;
    })
  }

  resetFilter() {
    this.minPrice = 0;
    this.maxPrice = 0;
    this.foods = this.allFoods;

    this.selectedFood = null;
  }

}
