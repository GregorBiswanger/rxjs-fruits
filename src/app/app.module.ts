import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DistinctComponent } from './distinct/distinct.component';
import { TakeComponent } from './take/take.component';
import { InitDirective } from './init.directive';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterComponent } from './filter/filter.component';
import { FruitPipe } from './shared/fruit.pipe';
import { TooltipDirective } from './shared/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    InitDirective,
    DistinctComponent,
    TakeComponent,
    FilterComponent,
    FruitPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DistinctComponent },
      { path: 'take', component: TakeComponent },
      { path: 'filter', component: FilterComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
