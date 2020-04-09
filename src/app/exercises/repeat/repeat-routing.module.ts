import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepeatComponent } from './repeat.component';

const routes: Routes = [{ path: '', component: RepeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepeatRoutingModule { }
