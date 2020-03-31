import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../shared/exercise.service';
import { MapExercise } from './map-exercise';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  task = 'map';
  mapCode = `
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(
  map(ev => ev.clientX)
);

positions.subscribe(x => console.log(x));
  `;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.newExercise(new MapExercise());
  }
}
