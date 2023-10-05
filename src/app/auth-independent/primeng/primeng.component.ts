import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent {

  products: any[] = [];

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(){
    this.dataService.getProduct().subscribe((data : any) => {
      console.log(data.products);
      this.products = data.products;
    });
  }

}
