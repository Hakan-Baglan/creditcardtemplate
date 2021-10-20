import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): unknown {
    if (value === null || value === undefined) {
      return '__';
    }

    if (value < 10) {
      return '0' + value;
    }

    return value;
  }

}
