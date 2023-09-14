import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products : any[] = [];
  //Inject data service here 
  constructor(
    private dataService: DataService,
    private cartService: CartService,
  ){}

  ngOnInit(){
    this.dataService.getProduct().subscribe((data : any) =>{
      console.log(data.products);
      this.products = data.products;
    });
  }

  addToCart(index: number) {
    this.cartService.add(this.products[index]);
  }


}
