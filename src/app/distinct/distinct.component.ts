import { ExerciseService } from './../exercise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
  task = 'Distinct';
  readonly fruits = ['fresh-apple',
    'fresh-apple',
    'fresh-banana',
    'fresh-apple'];
  readonly expectedFruits = ['fresh-apple',
    'fresh-banana'];
  code = `const fruits = from([
    "fresh-apple",
    "fresh-apple",
    "fresh-banana",
    "fresh-apple"]);
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
