import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitDirective } from './init.directive';
import { FruitPipe } from './fruit.pipe';
import { SubscribeComponent } from './exercises/subscribe/subscribe.component';
import { SharedModule } from './shared/shared.module';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    InitDirective,
    FruitPipe,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }