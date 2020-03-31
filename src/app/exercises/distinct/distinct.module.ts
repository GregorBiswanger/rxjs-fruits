import { NgModule } from '@angular/core';

import { DistinctRoutingModule } from './distinct-routing.module';
import { DistinctComponent } from './distinct.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DistinctComponent],
  imports: [
    SharedModule,
    DistinctRoutingModule
  ]
})
export class DistinctModule { }
