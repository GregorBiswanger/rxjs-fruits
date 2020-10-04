// tslint:disable: max-line-length
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { SubscribeComponent } from './exercises/subscribe/subscribe.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: GameComponent, children: [
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
      { path: 'skip-take-map', loadChildren: () => import('./exercises/skip-take-map/skip-take-map.module').then(m => m.SkipTakeMapModule) },
      { path: 'merge', loadChildren: () => import('./exercises/merge/merge.module').then(m => m.MergeModule) },
      { path: 'take-last', loadChildren: () => import('./exercises/take-last/take-last.module').then(m => m.TakeLastModule) },
      { path: 'skip-last', loadChildren: () => import('./exercises/skip-last/skip-last.module').then(m => m.SkipLastModule) },
      { path: 'skiplast-skip-merge', loadChildren: () => import('./exercises/skiplast-skip-merge/skiplast-skip-merge.module').then(m => m.SkiplastSkipMergeModule) },
      { path: 'zip-concatmap', loadChildren: () => import('./exercises/zip-concatmap/zip-concatmap.module').then(m => m.ZipConcatmapModule) },
      { path: 'repeat', loadChildren: () => import('./exercises/repeat/repeat.module').then(m => m.RepeatModule) },
      { path: 'fork-join', loadChildren: () => import('./exercises/fork-join/fork-join.module').then(m => m.ForkJoinModule) }
    ]
  },
  { path: 'privacy', component: PrivacyComponent },
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
