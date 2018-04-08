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
      let i: number;
      if (sortBy === 'hp') { i = 0;
      } else if (sortBy === 'atk') { i = 1;
      } else if (sortBy === 'def') { i = 2;
      } else if (sortBy === 'satk') { i = 3;
      } else if (sortBy === 'sdef') { i = 4;
      } else if (sortBy === 'spe') { i = 5;
      }
      sortedArray = pkmnList.sort((p1, p2) => p1.stats[i] - p2.stats[i]);
    }

    if (ascending) {
      return sortedArray;
    } else {
      return sortedArray.reverse();
    }
  }
}
