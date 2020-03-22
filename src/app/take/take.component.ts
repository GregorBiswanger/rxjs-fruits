import { TakeExercise } from './take.exercise';
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../shared/exercise.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  task = 'Take';

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.newExercise(new TakeExercise());
  }
}
