import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  @Input() foods: any = [
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
  ];
  // @Output() select = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {}

  addToCart(food: any) {
    // console.log(food);
    // this.select.emit(food);

    this.dataService.addToCartData(food);

  }

}
