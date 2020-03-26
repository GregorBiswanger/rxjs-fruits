import { ExerciseService } from '../shared/exercise.service';
import { Component, OnInit } from '@angular/core';
import { DistinctExercise } from './distinct-exercise';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
  exerciseTitle = 'Distinct';
  distinctCode = `
  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
    distinct()
  ).subscribe(x => console.log(x)); // 1, 2, 3, 4
  `;

  constructor(public exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new DistinctExercise());
  }
}
