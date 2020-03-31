import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';

@NgModule({
  declarations: [PipeComponent],
  imports: [
    SharedModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
