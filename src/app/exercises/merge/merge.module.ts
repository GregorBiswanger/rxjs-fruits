import { NgModule } from '@angular/core';

import { MergeRoutingModule } from './merge-routing.module';
import { MergeComponent } from './merge.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MergeComponent],
  imports: [
    SharedModule,
    MergeRoutingModule
  ]
})
export class MergeModule { }
