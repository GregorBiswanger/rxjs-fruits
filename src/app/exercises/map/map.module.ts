import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [
    SharedModule,
    MapRoutingModule
  ]
})
export class MapModule { }
