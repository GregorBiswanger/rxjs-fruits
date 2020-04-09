import { NgModule } from '@angular/core';

import { SkipLastRoutingModule } from './skip-last-routing.module';
import { SkipLastComponent } from './skip-last.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkipLastComponent],
  imports: [
    SharedModule,
    SkipLastRoutingModule
  ]
})
export class SkipLastModule { }
