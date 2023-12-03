import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction } from 'src/app/core/store/counter.action';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss']
})
export class CounterControlComponent {

  constructor(
    private store: Store
  ) {}
  
  increment(incrementor: number) {
    this.store.dispatch(incrementAction({value: incrementor}));
  }
  decrement() {
    this.store.dispatch(decrementAction())
  }
}
