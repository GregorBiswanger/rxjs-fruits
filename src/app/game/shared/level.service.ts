import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import levels from './../../exercises/levels.json';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  gameOver$ = new Subject();
  levels: Level[] = levels;
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

  constructor(private localStorageService: LocalStorageService) {
    const solvedLevels = localStorageService.loadSolvedLevels();

    for (let index = 0; index < this.levels.length; index++) {
      const level = this.levels[index];
      if (level.urlPath === window.location.pathname) {
        this.currentLevelIndex = index;
      }

      if (solvedLevels.includes(level.title)) {
        this.levels[index].solved = true;
      }
    }
  }

  nextLevel(currentLevelSolved: boolean) {
    if (currentLevelSolved) {
      this.currentLevel.solved = currentLevelSolved;

      this.localStorageService.saveLevelSolved(this.currentLevel.title);
    }

    const nextLevelIndex = this.currentLevelIndex + 1;

    if (nextLevelIndex <= this.levels.length - 1) {
      this.currentLevelIndex = nextLevelIndex;
    }

    this.checkOfGameOver();
  }

  checkOfGameOver() {
    if (this.levels.every(level => level.solved)) {
      this.gameOver$.next();
    }
  }

  previousLevel() {
    const previousIndex = this.currentLevelIndex - 1;

    if (previousIndex >= 0) {
      this.currentLevelIndex = previousIndex;
    }
  }
}

export interface Level {
  title: string;
  number: number;
  urlPath: string;
  solved: boolean;
}
