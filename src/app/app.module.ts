import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DistinctComponent } from './distinct/distinct.component';
import { TakeComponent } from './take/take.component';
import { InitDirective } from './init.directive';
import { FilterComponent } from './filter/filter.component';
import { FruitPipe } from './shared/fruit.pipe';
import { TooltipDirective } from './shared/tooltip.directive';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MapComponent } from './map/map.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeNextComponent } from './subscribe-next/subscribe-next.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    InitDirective,
    DistinctComponent,
    TakeComponent,
    FilterComponent,
    FruitPipe,
    TooltipDirective,
    MapComponent,
    SubscribeComponent,
    SubscribeNextComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule,
    FlexLayoutModule,
    HttpClientModule,
    HighlightModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'subscribe', pathMatch: 'full' },
      { path: 'subscribe', component: SubscribeComponent },
      { path: 'subscribe-next', component: SubscribeNextComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'distinct', component: DistinctComponent },
      { path: 'take', component: TakeComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'map', component: MapComponent }
    ]),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/javascript')
  };
}
