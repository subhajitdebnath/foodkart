import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  @Input() foods: any;
  @Output() select = new EventEmitter();

  selectFood(food: any) {
    // console.log(food);
    this.select.emit(food);
  }

}
