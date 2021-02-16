import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './model/hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val: Hero[]) => val.indexOf(input)) >= 0;
    } else {
      return value;
    }
  }

}
