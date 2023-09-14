import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products : any[] = [];
//Inject data service here 
constructor(private dataService:DataService){}

ngOnInit(){
  this.dataService.getProduct().subscribe((data : any) =>{
     console.log(data.products);
    this.products = data.products;
  });
}


}
