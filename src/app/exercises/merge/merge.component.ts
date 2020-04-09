import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MergeExercise } from './merge-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit, OnDestroy {
  exerciseTitle = 'merge';
  mergeCode = `
  const first = of(1, 2, 3)
  const second = of(4, 5, 6);

  merge(first, second).subscribe({
    next: data => console.log(data)
  });

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
    this.exerciseService.newExercise(new MergeExercise());
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
