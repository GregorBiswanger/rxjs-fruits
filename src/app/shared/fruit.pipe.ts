import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruit'
})
export class FruitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if (value === 'apple') {
      return 'Apfel';
    }

    if (value === 'banana') {
      return 'Banane';
    }

    if (value === 'cherry') {
      return 'Kirsche';
    }

    return null;
  }

}
