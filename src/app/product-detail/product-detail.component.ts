import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId = null; 
  product: any;
  constructor(
    private route: ActivatedRoute,
    private dataService : DataService
  ) {
    this.productId = this.route.snapshot.params['id'];
   }
 ngOnInit(){
     // Find the product that correspond with the id provided in route.
   this.dataService.getProduct(this.productId).subscribe((res :any) =>{
     this.product = res;
      console.log(this.product);
    }); 

 }

}
