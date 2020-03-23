import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levels: Level[] = [];
  currentLevelIndex = 0;

  get currentLevel() {
    return this.levels[this.currentLevelIndex];
  }

  set currentLevel(level: Level) {
    this.currentLevelIndex = this.levels.indexOf(level);
  }

  isCurrentLevel(level: Level) {
    return this.levels[this.currentLevelIndex].number === level.number;
  }

  constructor() {
    this.levels.push({
      title: 'distinct',
      number: 1,
      urlPath: '',
      solved: false
    });

    this.levels.push({
      title: 'take',
      number: 2,
      urlPath: '/take',
      solved: false
    });

    this.levels.push({
      title: 'filter',
      number: 3,
      urlPath: '/filter',
      solved: false
    });

    for (let index = 0; index < this.levels.length; index++) {
      const level = this.levels[index];
      if (level.urlPath === window.location.pathname) {
        this.currentLevelIndex = index;
      }
    }
  }

  nextLevel() {
    this.currentLevel.solved = true;

    const nextLevelIndex = this.currentLevelIndex + 1;

    if (nextLevelIndex <= this.levels.length - 1) {
      this.currentLevelIndex = nextLevelIndex;
    }
  }
}

export interface Level {
  title: string;
  number: number;
  urlPath: string;
  solved: boolean;
}
