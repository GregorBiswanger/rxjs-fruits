import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkiplastSkipMergeComponent } from './skiplast-skip-merge.component';

const routes: Routes = [{ path: '', component: SkiplastSkipMergeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkiplastSkipMergeRoutingModule { }
