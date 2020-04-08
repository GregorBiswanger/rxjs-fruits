import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DistinctuntilchangedExercise } from './distinctuntilchanged-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-distinctuntilchanged',
  templateUrl: './distinctuntilchanged.component.html',
  styleUrls: ['./distinctuntilchanged.component.scss']
})
export class DistinctuntilchangedComponent implements OnInit, OnDestroy {
  exerciseTitle = 'distinctUntilChanged';
  distinctUntilChangedCode = `
  of(1, 1, 2, 1, 3, 4).pipe(
    distinctUntilChanged()
  ).subscribe(x => console.log(x));

  // Logs:
  // 1
  // 2
  // 1
  // 3
  // 4
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new DistinctuntilchangedExercise());
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
