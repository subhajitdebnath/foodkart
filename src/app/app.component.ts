import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { initCount } from './core/store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  constructor(
    private store: Store<{ counter: number }>
  ) {}

  ngOnInit() {
    this.store.dispatch(initCount());
  }
}
