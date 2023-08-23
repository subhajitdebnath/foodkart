import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-food',
  templateUrl: './selected-food.component.html',
  styleUrls: ['./selected-food.component.scss']
})
export class SelectedFoodComponent {

  @Input() selectedFood: any;
}
