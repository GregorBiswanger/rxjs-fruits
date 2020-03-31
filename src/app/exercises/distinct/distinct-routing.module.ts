import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistinctComponent } from './distinct.component';

const routes: Routes = [{ path: '', component: DistinctComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistinctRoutingModule { }
