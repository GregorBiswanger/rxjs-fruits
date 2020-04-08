import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterMapTakeComponent } from './filter-map-take.component';

const routes: Routes = [{ path: '', component: FilterMapTakeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterMapTakeRoutingModule { }
