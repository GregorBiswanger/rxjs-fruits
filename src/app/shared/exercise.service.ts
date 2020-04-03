import { Exercise } from './exercise';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  currentExercise: Exercise = {
    code: '',
    fruits: [],
    expectedFruits: [],
    minPositionLineNumber: 0,
    positionColumnNumber: 0
  };

  assertionChecked$ = new Subject<boolean>();
  exerciseChanged$ = new Subject<Exercise>();

  newExercise(exercise: Exercise) {
    this.currentExercise = exercise;
    this.exerciseChanged$.next(exercise);
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
