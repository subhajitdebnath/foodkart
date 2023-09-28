import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  keyword: string = '';
  products = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParam: any) => {

      this.keyword = queryParam.q;
      console.log(this.keyword);
      this.searchProducts();
    });
  }

  searchProducts() {
    this.dataService.searchProducts(this.keyword).subscribe((data : any) => {
      console.log(data.products);
      this.products = data.products;
    });
  }

}
