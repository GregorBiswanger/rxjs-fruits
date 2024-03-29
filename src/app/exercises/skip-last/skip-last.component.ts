import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkipLastExercise } from './skip-last-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.scss']
})
export class SkipLastComponent implements OnInit, OnDestroy {
  exerciseTitle = 'skipLast';
  skipLastCode = `
  of(1, 2, 3, 4).pipe(
    skipLast(1)
  ).subscribe(data => console.log(data));

  // Logs:
  // 1
  // 2
  // 3
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SkipLastExercise());
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
