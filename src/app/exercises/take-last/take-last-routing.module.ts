import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeLastComponent } from './take-last.component';

const routes: Routes = [{ path: '', component: TakeLastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeLastRoutingModule { }
