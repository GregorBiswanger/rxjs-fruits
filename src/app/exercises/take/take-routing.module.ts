import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeComponent } from './take.component';

const routes: Routes = [{ path: '', component: TakeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeRoutingModule { }
