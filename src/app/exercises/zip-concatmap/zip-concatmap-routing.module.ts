import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipConcatmapComponent } from './zip-concatmap.component';

const routes: Routes = [{ path: '', component: ZipConcatmapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipConcatmapRoutingModule { }
