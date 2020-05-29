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

    if (value === 'ru') {
      return 'Русский';
    }

    if (value === 'zh_CN') {
      return '中文-简体';
    }

    return '';
  }

}
