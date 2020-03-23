import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruit'
})
export class FruitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if (value === 'fresh-apple') {
      return 'Apple';
    }

    if (value === 'fresh-banana') {
      return 'Banana';
    }

    return null;
  }

}
