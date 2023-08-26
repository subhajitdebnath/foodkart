import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId = null;

  constructor(
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.params['id'];
  }
}
