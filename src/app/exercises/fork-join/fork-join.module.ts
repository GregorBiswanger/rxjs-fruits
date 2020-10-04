import { NgModule } from '@angular/core';

import { ForkJoinRoutingModule } from './fork-join-routing.module';
import { ForkJoinComponent } from './fork-join.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ForkJoinComponent],
  imports: [
    SharedModule,
    ForkJoinRoutingModule
  ]
})
export class ForkJoinModule { }
