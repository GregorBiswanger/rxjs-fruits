import { FilterExercise } from './filter-exercise';
import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  task = 'filter';
  filterCode = `
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const clicksOnDivs = clicks.pipe(
  filter(ev => ev.target.tagName === 'DIV')
);

clicksOnDivs.subscribe(x => console.log(x));
  `;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new FilterExercise());
  }
}
