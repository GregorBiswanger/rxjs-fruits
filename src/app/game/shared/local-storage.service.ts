import { SoundSettings } from './sound.service';
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

  saveSoundSettings(soundSettings: SoundSettings) {
    localStorage.setItem('sound', JSON.stringify(soundSettings));
  }

  loadSoundSettings(): SoundSettings {
    if ('sound' in localStorage) {
      return JSON.parse(localStorage.getItem('sound'));
    }

    return {
      imagePath: '/assets/images/sound-low.png',
      volume: 0.1,
      isMute: false
    };
  }

  clearAll() {
    localStorage.clear();
  }
}
