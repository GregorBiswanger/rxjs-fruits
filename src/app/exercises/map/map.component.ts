import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExerciseService } from '../../shared/exercise.service';
import { MapExercise } from './map-exercise';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  task = 'map';
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

  currentLanguage = '';
  onLangChangeSubscription: Subscription;

  constructor(private exerciseService: ExerciseService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new MapExercise());
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
