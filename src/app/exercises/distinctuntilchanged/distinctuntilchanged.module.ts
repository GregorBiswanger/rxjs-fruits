import { NgModule } from '@angular/core';

import { DistinctuntilchangedRoutingModule } from './distinctuntilchanged-routing.module';
import { DistinctuntilchangedComponent } from './distinctuntilchanged.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DistinctuntilchangedComponent],
  imports: [
    SharedModule,
    DistinctuntilchangedRoutingModule
  ]
})
export class DistinctuntilchangedModule { }
