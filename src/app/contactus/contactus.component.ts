import { Component } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  products: any[] = [];

  private firstSub!: Subscription;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {

    this.firstSub = interval(2000).subscribe(count => {
      console.log(count);
    });


  }

  ngOnDestroy() {
    console.log('destroy contact us');

    this.firstSub.unsubscribe();
  }

}
