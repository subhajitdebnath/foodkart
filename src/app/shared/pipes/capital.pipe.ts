import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital',
  pure: true
})
export class CapitalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // console.log(value);
    return value.toUpperCase().slice(0, 10);
  }

}
