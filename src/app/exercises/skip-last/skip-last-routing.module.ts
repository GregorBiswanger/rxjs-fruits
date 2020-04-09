import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkipLastComponent } from './skip-last.component';

const routes: Routes = [{ path: '', component: SkipLastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkipLastRoutingModule { }
