import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkipTakeMapComponent } from './skip-take-map.component';

const routes: Routes = [{ path: '', component: SkipTakeMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkipTakeMapRoutingModule { }
