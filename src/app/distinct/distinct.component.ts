import { ExerciseService } from '../shared/exercise.service';
import { Component, OnInit } from '@angular/core';
import { DistinctExercise } from './distinct.exercise';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
  task = 'Distinct';

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.newExercise(new DistinctExercise());
  }
}
