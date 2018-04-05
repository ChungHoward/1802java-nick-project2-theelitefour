import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class Filter implements PipeTransform {

    transform(stringList: string[], searchText: string): string[] {

        if (!stringList) {
            return [];
        }

        searchText = searchText.toLowerCase();

        return stringList.filter( movie => {
            let search: boolean;
            search = movie.toLowerCase().includes(searchText);
            return search;
        });
    }
}
