import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkiplastSkipMergeExercise } from './skiplast-skip-merge-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skiplast-skip-merge',
  templateUrl: './skiplast-skip-merge.component.html',
  styleUrls: ['./skiplast-skip-merge.component.scss']
})
export class SkiplastSkipMergeComponent implements OnInit, OnDestroy {
  exerciseTitle = 'skipLast, skip & merge';
  skipCode = `
  of(1, 2, 3, 4).pipe(
    skip(1)
  ).subscribe(data => console.log(data));

  // Logs:
  // 2
  // 3
  // 4
  `;
  skipLastCode = `
  of(1, 2, 3, 4).pipe(
    skipLast(1)
  ).subscribe(data => console.log(data));

  // Logs:
  // 1
  // 2
  // 3
  `;
  mergeCode = `
  const first = of(1, 2, 3)
  const second = of(4, 5, 6);

  merge(first, second).subscribe(data => console.log(data));

  // Logs:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SkiplastSkipMergeExercise());
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
