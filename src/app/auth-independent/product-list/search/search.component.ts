import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm : string = '';
 constructor(private cartService : CartService) {}
  ngOnInit(){
  }
  search(){
  //this.searchTerm = event.target.value;
  // console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);
  }

}
