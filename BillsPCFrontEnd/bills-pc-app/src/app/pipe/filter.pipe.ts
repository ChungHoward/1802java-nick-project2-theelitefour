import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemon';

@Pipe({
  name: 'pkmnFilter'
})
export class Filter implements PipeTransform {

  transform(pkmnList: Pokemon[], searchText: string): Pokemon[] {

    if (!pkmnList) {
      return [];
    }

    if (!searchText) {
      return pkmnList;
    }

    searchText = searchText.toLowerCase();

    const newList = new Array<Pokemon>();

    pkmnList.forEach(pkmn => {
      if (pkmn.name.toLowerCase().includes(searchText)) {
        newList.push(pkmn);
      }
    });

    return newList;
  }
}
