import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TakeRoutingModule } from './take-routing.module';
import { TakeComponent } from './take.component';

@NgModule({
  declarations: [TakeComponent],
  imports: [
    SharedModule,
    TakeRoutingModule
  ]
})
export class TakeModule { }
