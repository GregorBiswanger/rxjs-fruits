import { Exercise } from './exercise';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  codeChanged$ = new BehaviorSubject<string>('');
  currentExercise: Exercise = {
    code: '',
    fruits: [],
    expectedFruits: [],
    minPositionLineNumber: 0,
    maxPositionLineNumber: 0,
    codeLineLength: 0,
    positionColumnNumber: 0
  };

  assertionChecked$ = new Subject<boolean>();

  newExercise(exercise: Exercise) {
    this.currentExercise = exercise;
    this.codeChanged$.next(exercise.code);
  }

  assertExerciseOutput() {
    const results = [];

    return {
      next: (value) => results.push(value),
      complete: () => {
        const valid = JSON.stringify(results) === JSON.stringify(this.currentExercise.expectedFruits);
        this.assertionChecked$.next(valid);
      }
    };
  }
}
