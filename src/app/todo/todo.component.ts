import { Component } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  todos: any[] = [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    
  }

}
