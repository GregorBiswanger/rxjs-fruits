import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../shared/exercise.service';
import { SubscribeExercise } from './subscribe-exercise';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  exerciseTitle = 'subscribe';
  distinctCode = `
  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
    distinct()
  ).subscribe(x => console.log(x)); // 1, 2, 3, 4
  `;

  constructor(public exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SubscribeExercise());
  }
}
