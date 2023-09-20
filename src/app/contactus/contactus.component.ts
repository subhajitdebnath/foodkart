import { Component } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  products: any[] = [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {

    interval(2000).subscribe(count => {
      console.log(count);
    });


  }

}
