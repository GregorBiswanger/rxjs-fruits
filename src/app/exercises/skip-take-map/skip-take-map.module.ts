import { NgModule } from '@angular/core';

import { SkipTakeMapRoutingModule } from './skip-take-map-routing.module';
import { SkipTakeMapComponent } from './skip-take-map.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkipTakeMapComponent],
  imports: [
    SharedModule,
    SkipTakeMapRoutingModule
  ]
})
export class SkipTakeMapModule { }
