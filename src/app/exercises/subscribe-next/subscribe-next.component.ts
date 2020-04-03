import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExerciseService } from '../../shared/exercise.service';
import { SubscibeNextExercise } from './subscibe-next-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe-next',
  templateUrl: './subscribe-next.component.html',
  styleUrls: ['./subscribe-next.component.scss']
})
export class SubscribeNextComponent implements OnInit, OnDestroy {
  exerciseTitle = 'subscribe-next';
  distinctCode = `
  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
    distinct()
  ).subscribe(x => console.log(x)); // 1, 2, 3, 4
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new SubscibeNextExercise());
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
