import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruit'
})
export class FruitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if (value === 'fresh-apple') {
      return 'Frischen Apfel';
    }

    if (value === 'fresh-banana') {
      return 'Frische Banane';
    }

    return null;
  }

}
