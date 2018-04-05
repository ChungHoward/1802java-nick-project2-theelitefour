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

    for (let i = 0; i < pkmnList.length; i++) {
      const pkmn = pkmnList[i];
      if (pkmn.name.toLowerCase().includes(searchText)) {
        newList.push(pkmn);
      }
      console.log(pkmn.name + ' ' + searchText + ' ' + pkmn.name.toLowerCase().includes(searchText));
    }

    return newList;
    /*

    pkmnList.forEach(pkmn => {
      console.log(pkmn.name + ' ' + searchText + ' ' + pkmn.name.toLowerCase().includes(searchText));
      if (pkmn.name.includes(searchText)) {
        console.log(' ' + pkmn.name);
        newList.push(pkmn);
      }
    });
    for (const pkmn of pkmnList) {
      if (pkmn.name.includes(searchText)) {
        newList.push(pkmn);
      }
    }

    return pkmnList.filter(pkmn => {
      let search: boolean;
      search = pkmn.name.toLowerCase().includes(searchText);
      return search;
    });
    */
  }
}
