import { NgModule } from '@angular/core';

import { TakeLastRoutingModule } from './take-last-routing.module';
import { TakeLastComponent } from './take-last.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TakeLastComponent],
  imports: [
    SharedModule,
    TakeLastRoutingModule
  ]
})
export class TakeLastModule { }
