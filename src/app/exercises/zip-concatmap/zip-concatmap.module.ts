import { NgModule } from '@angular/core';

import { ZipConcatmapRoutingModule } from './zip-concatmap-routing.module';
import { ZipConcatmapComponent } from './zip-concatmap.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ZipConcatmapComponent],
  imports: [
    SharedModule,
    ZipConcatmapRoutingModule
  ]
})
export class ZipConcatmapModule { }
