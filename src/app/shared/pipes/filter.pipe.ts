import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchValue: string, searchField: string): any {

    //const result : any =[];
    if (!items || searchValue === '' || searchField === '') {
      return items;
    }
    items.forEach((a: any) => {
      return a[searchField].toLowerCase().includes(searchValue.toLowerCase());
    }
    )
  }
}


