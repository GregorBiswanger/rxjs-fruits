import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistinctuntilchangedComponent } from './distinctuntilchanged.component';

const routes: Routes = [{ path: '', component: DistinctuntilchangedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistinctuntilchangedRoutingModule { }
