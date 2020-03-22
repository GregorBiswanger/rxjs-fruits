import { FilterExercise } from './filter-exercise';
import { ExerciseService } from '../shared/exercise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  task = 'Filter';

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new FilterExercise());
  }
}
