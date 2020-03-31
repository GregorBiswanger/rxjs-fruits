import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SubscribeNextRoutingModule } from './subscribe-next-routing.module';
import { SubscribeNextComponent } from './subscribe-next.component';

@NgModule({
  declarations: [SubscribeNextComponent],
  imports: [
    SharedModule,
    SubscribeNextRoutingModule
  ]
})
export class SubscribeNextModule { }
