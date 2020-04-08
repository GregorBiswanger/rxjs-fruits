import { NgModule } from '@angular/core';

import { FilterMapTakeRoutingModule } from './filter-map-take-routing.module';
import { FilterMapTakeComponent } from './filter-map-take.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FilterMapTakeComponent],
  imports: [
    SharedModule,
    FilterMapTakeRoutingModule
  ]
})
export class FilterMapTakeModule { }
