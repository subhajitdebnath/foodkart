import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartLength = 0;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void {
    this.dataService.refreshCart.subscribe((cartInfo: any) => {
      console.log(cartInfo);
      this.cartLength = cartInfo.length;
    });
  }

}
