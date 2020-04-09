import { ExerciseService } from '../../shared/exercise.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZipConcatmapExercise } from './zip-concatmap-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zip-concatmap',
  templateUrl: './zip-concatmap.component.html',
  styleUrls: ['./zip-concatmap.component.scss']
})
export class ZipConcatmapComponent implements OnInit, OnDestroy {
  exerciseTitle = 'zip & concatMap';
  zipCode = `
  let age$ = of<number>(27, 25, 29);
  let name$ = of<string>('Foo', 'Bar', 'Beer');
  let isDev$ = of<boolean>(true, true, false);

  zip(age$, name$, isDev$).pipe(
    map(([age, name, isDev]) => ({ age, name, isDev })),
  ).subscribe(x => console.log(x));

  // Logs:
  // { age: 27, name: 'Foo', isDev: true }
  // { age: 25, name: 'Bar', isDev: true }
  // { age: 29, name: 'Beer', isDev: false }
  `;
  concatmapCode = `
  const counts = from([3, 2]);

  counts.pipe(
      concatMap(count => interval().pipe(
          take(count)
      ))
  ).subscribe(result => console.log(result));

  // Logs:
  // 0
  // 1
  // 2
  // 0
  // 1
  `;

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new ZipConcatmapExercise());
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
