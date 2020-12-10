import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private globals: Globals) { }

  transform(items: any[], searchText?: string): any[] {
    if (!searchText) {
      this.globals.empcount = items.length;
      return items;
    }
    else {
      searchText = searchText.toUpperCase();
    }
    items = items.filter(item => {
      return item.name.toUpperCase().startsWith(searchText) == true;
    })
    this.globals.empcount = items.length;
    return items;
  }
}