import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === 'de') {
      return 'Deutsch';
    }

    if (value === 'en') {
      return 'English';
    }

    if (value === 'es') {
      return 'Spanish';
    }

    return '';
  }

}
