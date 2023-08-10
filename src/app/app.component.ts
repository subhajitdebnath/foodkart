import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cart = [
    {
      id: 1,
      name: 'Breads',
      price: '100',
      quantity: 5
    },
    {
      id: 1,
      name: 'Meat',
      price: '200',
      quantity: 4
    },
    {
      id: 1,
      name: 'Salad',
      price: '300',
      quantity: 2
    },
    {
      id: 1,
      name: 'Pizza',
      price: '400',
      quantity: 10
    }
  ]

  constructor() {
    console.log('hi');
  }
}
