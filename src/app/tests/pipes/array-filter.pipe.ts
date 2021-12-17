import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ArrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => filter(item));
  }

}
