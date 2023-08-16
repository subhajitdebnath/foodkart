import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(carts: any[], searchText:string): any{
    if(!carts || !searchText){
      return carts;
    }
    searchText = searchText.toLowerCase();
    return carts.filter(cart =>{
    return cart.name.toLocaleLowerCase().includes(searchText) ||
      cart.price.toString().toLocaleLowerCase().includes(searchText) ||
      cart.quantity.toString().toLocaleLowerCase().includes(searchText)
    });
  }
}
