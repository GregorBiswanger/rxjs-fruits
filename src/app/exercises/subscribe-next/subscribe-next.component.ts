import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../shared/exercise.service';
import { SubscibeNextExercise } from './subscibe-next-exercise';

@Component({
  selector: 'app-subscribe-next',
  templateUrl: './subscribe-next.component.html',
  styleUrls: ['./subscribe-next.component.scss']
})
export class SubscribeNextComponent implements OnInit {
  exerciseTitle = 'subscribe-next';
  distinctCode = `
  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
    distinct()
  ).subscribe(x => console.log(x)); // 1, 2, 3, 4
  `;

  constructor(public exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SubscibeNextExercise());
  }
}
