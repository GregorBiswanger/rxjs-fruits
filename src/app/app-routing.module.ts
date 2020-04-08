// tslint:disable: max-line-length
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './exercises/subscribe/subscribe.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'subscribe', pathMatch: 'full' },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'subscribe-next', loadChildren: () => import('./exercises/subscribe-next/subscribe-next.module').then(m => m.SubscribeNextModule) },
  { path: 'distinct', loadChildren: () => import('./exercises/distinct/distinct.module').then(m => m.DistinctModule) },
  { path: 'take', loadChildren: () => import('./exercises/take/take.module').then(m => m.TakeModule) },
  { path: 'filter', loadChildren: () => import('./exercises/filter/filter.module').then(m => m.FilterModule) },
  { path: 'map', loadChildren: () => import('./exercises/map/map.module').then(m => m.MapModule) },
  { path: 'filter-map-take', loadChildren: () => import('./exercises/filter-map-take/filter-map-take.module').then(m => m.FilterMapTakeModule) },
  { path: 'distinctuntilchanged', loadChildren: () => import('./exercises/distinctuntilchanged/distinctuntilchanged.module').then(m => m.DistinctuntilchangedModule) },
  { path: 'skip', loadChildren: () => import('./exercises/skip/skip.module').then(m => m.SkipModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
