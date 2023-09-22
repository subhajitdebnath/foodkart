import { Component } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  products: any[] = [];

  private firstSub!: Subscription;

  private customObs!: Observable<any>;
  private customSub!: Subscription;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {

    this.customObs = Observable.create((observable: any) => {
      let counter = 1;
      setInterval(() => {
        observable.next(counter);
        counter ++;

        if(counter > 5) {
          observable.complete();
        }
        if(counter === 5) {
          observable.error(new Error('error happened'))
        }
      }, 1000);
    });

    this.customSub = this.customObs
    .pipe(
      filter((data) => {
        return data%2 !== 0;
      }),
      map((data) => {
        return data * 2;
      })
    )
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err.message);
    });



    // this.firstSub = interval(2000).subscribe(count => {
    //   console.log(count);
    // });


  }

  ngOnDestroy() {
    console.log('destroy contact us');

    this.firstSub?.unsubscribe();
    this.customSub?.unsubscribe();
  }

}
