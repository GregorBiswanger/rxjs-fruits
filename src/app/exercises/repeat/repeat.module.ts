import { NgModule } from '@angular/core';

import { RepeatRoutingModule } from './repeat-routing.module';
import { RepeatComponent } from './repeat.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RepeatComponent],
  imports: [
    SharedModule,
    RepeatRoutingModule
  ]
})
export class RepeatModule { }
