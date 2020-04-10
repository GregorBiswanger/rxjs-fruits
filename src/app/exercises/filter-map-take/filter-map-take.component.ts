import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterMapTakeExercise } from './filter-map-take-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-map-take',
  templateUrl: './filter-map-take.component.html',
  styleUrls: ['./filter-map-take.component.scss']
})
export class FilterMapTakeComponent implements OnInit, OnDestroy {
  exerciseTitle = 'filter-map-take';
  filterCode = `
  const source = from([1, 2, 3, 4, 5]);
  source.pipe(
    filter(data => data === 3)
  ).subscribe(data => console.log(data));

  // Logs:
  // 3
  `;
  mapCode = `
  const source = from([1, 2, 3, 4, 5]);
  source.pipe(
    map(data => 'My Number is ' + data)
  ).subscribe(data => console.log(data));

  // Logs:
  // My Number is 1
  // My Number is 2
  // My Number is 3
  // My Number is 4
  // My Number is 5
    `;
  takeCode = `
  const intervalCount = interval(1000);
  intervalCount.pipe(
    take(5)
  ).subscribe(x => console.log(x));

  // Logs:
  // 0
  // 1
  // 2
  // 3
  // 4
      `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new FilterMapTakeExercise());
    this.currentLanguage = this.translateService.currentLang;
    this.onLangChangeSubscription = this.translateService.onLangChange.subscribe({
      next: () => {
        this.currentLanguage = this.translateService.currentLang;
      }
    });
  }

  ngOnDestroy() {
    this.onLangChangeSubscription.unsubscribe();
  }
}
