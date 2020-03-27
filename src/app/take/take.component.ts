import { TakeExercise } from './take-exercise';
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../shared/exercise.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  task = 'take';
  takeCode = `
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4
  `;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new TakeExercise());
  }
}
