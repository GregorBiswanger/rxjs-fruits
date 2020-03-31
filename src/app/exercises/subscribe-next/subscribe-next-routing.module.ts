import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeNextComponent } from './subscribe-next.component';

const routes: Routes = [{ path: '', component: SubscribeNextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribeNextRoutingModule { }
