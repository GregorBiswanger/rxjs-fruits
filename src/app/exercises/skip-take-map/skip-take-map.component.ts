import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkipTakeMapExercise } from './skip-take-map-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-take-map',
  templateUrl: './skip-take-map.component.html',
  styleUrls: ['./skip-take-map.component.scss']
})
export class SkipTakeMapComponent implements OnInit, OnDestroy {
  exerciseTitle = 'skip-take-map';
  skipCode = `
  of(1, 2, 3, 4).pipe(
    skip(1)
  ).subscribe({
    next: data => console.log(data)
  });

  // Logs:
  // 2
  // 3
  // 4
  `;
  takeCode = `
  const intervalCount = interval(1000);
  intervalCount.pipe(
    take(5)
  ).subscribe({
    next: x => console.log(x)
  });

  // Logs:
  // 0
  // 1
  // 2
  // 3
  // 4
  `;
  mapCode = `
const source = from([1, 2, 3, 4, 5]);
source.pipe(
  map(data => 'My Number is ' + data)
).subscribe({
  next: data => console.log(data)
});

// Logs:
// My Number is 1
// My Number is 2
// My Number is 3
// My Number is 4
// My Number is 5
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SkipTakeMapExercise());
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
