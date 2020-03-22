import { Injectable } from '@angular/core';
import { Subject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  code$ = new Subject<string>();
  fruits$: Observable<string>;
  expectedFruits: string[] = [''];
  assertionChecked$ = new Subject<boolean>();

  addFruits(fruits: string[]) {
    this.fruits$ = from(fruits);
  }

  assertExerciseOutput() {
    const results = [];

    return {
      next: (value) => results.push(value),
      complete: () => {
        const valid = JSON.stringify(results) === JSON.stringify(this.expectedFruits);
        this.assertionChecked$.next(valid);
      }
    };
  }
}
