import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitDirective } from './init.directive';
import { SubscribeComponent } from './exercises/subscribe/subscribe.component';
import { SharedModule } from './shared/shared.module';
import { AppTranslateModule } from './app-translate.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LanguagePipe } from './language.pipe';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [
    AppComponent,
    InitDirective,
    SubscribeComponent,
    NotFoundComponent,
    LanguagePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AppTranslateModule,
    Angulartics2Module.forRoot({
      gst: {
        trackingIds: ['UA-163429136-1'],
        anonymizeIp: true
      },
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
