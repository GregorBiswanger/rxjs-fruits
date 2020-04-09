import { NgModule } from '@angular/core';

import { SkiplastSkipMergeRoutingModule } from './skiplast-skip-merge-routing.module';
import { SkiplastSkipMergeComponent } from './skiplast-skip-merge.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkiplastSkipMergeComponent],
  imports: [
    SharedModule,
    SkiplastSkipMergeRoutingModule
  ]
})
export class SkiplastSkipMergeModule { }
