import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  task = 'Take';
  readonly fruits = ['fresh-banana',
    'fresh-banana',
    'fresh-banana',
    'fresh-banana'];
  readonly expectedFruits = ['fresh-banana',
    'fresh-banana'];
  code = `const fruits = from([
    "fresh-banana",
    "fresh-banana",
    "fresh-banana",
    "fresh-banana"]);
fruits.pipe(
\t
);`;

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
    this.exerciseService.code$.next(this.code);
    this.exerciseService.expectedFruits = this.expectedFruits;
    this.exerciseService.addFruits(this.fruits);
  }
}
