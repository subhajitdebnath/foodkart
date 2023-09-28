import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any[] = [];
  allProducts: any[] = [];
  searchKey : string = '';
  //Inject data service here 
  constructor(
    private dataService: DataService,
    private cartService: CartService,
  ){}

  ngOnInit(){
    this.dataService.getProduct().subscribe((data : any) => {
      console.log(data.products);
      this.products = data.products;
      this.allProducts = Object.assign(this.products);
    });
    //search
    this.cartService.search.subscribe((val:any) =>{
      this.searchKey = val;
      // console.log(this.searchKey);
      if(this.searchKey) {
        this.products = this.allProducts.filter(products => products.title.toLowerCase().includes(this.searchKey.toLowerCase()));
      } else {
        this.products = this.allProducts;
      }
    });
  }

  addToCart(index: number) {
    this.cartService.add(this.products[index]);
  }


}
