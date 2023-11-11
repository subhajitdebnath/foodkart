import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss']
})
export class CounterViewComponent {
  counter;
  count$: Observable<number>;

  constructor(
    private store: Store<{ counter: number }>
  ) {
    this.count$ = store.select('counter');
    // store.select('counter').subscribe(res => {
    //   this.counter = res;
    // })
  }
}
