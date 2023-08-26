import { Component } from '@angular/core';
import { DataService } from '../core/services/data.service';

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
    this.dataService.getProducts().subscribe((res: any) => {
      console.log(res.products);
      this.products = res.products;
    })
  }

}
