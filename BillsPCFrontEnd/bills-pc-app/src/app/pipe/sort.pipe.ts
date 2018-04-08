import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemon';

@Pipe({
  name: 'pkmnSort'
})
export class Sort implements PipeTransform {

  transform(pkmnList: Pokemon[], sortBy: string, ascending: boolean): Pokemon[] {

    if (!pkmnList) {
      return [];
    }

    if (!sortBy) {
      return pkmnList;
    }

    let sortedArray: Array<Pokemon>;

    if (sortBy === 'name') {
      sortedArray = pkmnList.sort((p1, p2) => {
        if (p1.name > p2.name) {
          return 1;
        } else if (p1.name < p2.name) {
          return -1;
        }
        return 0;
      });
    } else if (sortBy === 'type') {
      sortedArray = pkmnList.sort((p1, p2) => {
        if (p1.types[0] > p2.types[0]) {
          return 1;
        } else if (p1.types[0] < p2.types[0]) {
          return -1;
        } else {
          if (p1.types[1] > p2.types[1]) {
            return 1;
          } else if (p1.types[1] < p2.types[1]) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    } else if (sortBy.includes('move')) {
      const lastChar = sortBy.substr(sortBy.length - 1, 1);
      const i = Number.parseInt(lastChar) - 1;
      sortedArray = pkmnList.sort((p1, p2) => {
        if (p1.moveset[i] > p2.moveset[i]) {
          return 1;
        } else if (p1.moveset[i] < p2.moveset[i]) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      if (sortBy === 'hp') {
        sortedArray = pkmnList.sort((p1, p2) => p1.stats.hp - p2.stats.hp);
      } else if (sortBy === 'atk') {
        sortedArray = pkmnList.sort((p1, p2) => p1.stats.atk - p2.stats.atk);
      } else if (sortBy === 'def') {
        sortedArray = pkmnList.sort((p1, p2) => p1.stats.def - p2.stats.def);
      } else if (sortBy === 'satk') {
        sortedArray = pkmnList.sort((p1, p2) => p1.stats.satk - p2.stats.satk);
      } else if (sortBy === 'sdef') {
        sortedArray = pkmnList.sort((p1, p2) => p1.stats.sdef - p2.stats.sdef);
      } else if (sortBy === 'spe') {
        sortedArray = pkmnList.sort((p1, p2) => p1.stats.spe - p2.stats.spe);
      }
    }

    if (ascending) {
      return sortedArray;
    } else {
      return sortedArray.reverse();
    }
  }
}
