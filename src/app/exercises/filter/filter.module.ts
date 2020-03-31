import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';

@NgModule({
  declarations: [FilterComponent],
  imports: [
    SharedModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
