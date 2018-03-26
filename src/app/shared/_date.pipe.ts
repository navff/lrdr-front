import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDate'})
export class DatePipe implements PipeTransform {
    transform(date: string): any {
        const year = date.substr(0, 4);
        const month = date.substr(5, 2);
        const day = date.substr(8, 2);

        return `${day}.${month}.${year}`;
    }
}
