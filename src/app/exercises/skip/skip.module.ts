import { NgModule } from '@angular/core';

import { SkipRoutingModule } from './skip-routing.module';
import { SkipComponent } from './skip.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkipComponent],
  imports: [
    SharedModule,
    SkipRoutingModule
  ]
})
export class SkipModule { }
