import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  saveCode(levelTitle: string, code: string) {
    localStorage.setItem(levelTitle, code);
  }

  loadCode(levelTitle: string) {
    if (levelTitle in localStorage) {
      return localStorage.getItem(levelTitle);
    }

    return '';
  }

  saveLevelSolved(title: string) {
    if ('levels' in localStorage) {
      const levels: string[] = JSON.parse(localStorage.getItem('levels'));
      levels.push(title);
      localStorage.setItem('levels', JSON.stringify(levels));
    } else {
      localStorage.setItem('levels', JSON.stringify([title]));
    }
  }

  loadSolvedLevels(): string[] {
    if ('levels' in localStorage) {
      return JSON.parse(localStorage.getItem('levels'));
    }

    return [];
  }

  saveLanguage(language: string) {
    localStorage.setItem('language', language);
  }

  loadSelectedLanguage(): string {
    if ('language' in localStorage) {
      return localStorage.getItem('language');
    }

    return '';
  }

  clearAll() {
    localStorage.clear();
  }
}
