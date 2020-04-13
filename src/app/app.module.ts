import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SubscribeComponent } from './exercises/subscribe/subscribe.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { InitDirective } from './game/shared/init.directive';
import { SharedModule } from './shared/shared.module';
import { AppTranslateModule } from './app-translate.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LanguagePipe } from './game/shared/language.pipe';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    InitDirective,
    SubscribeComponent,
    NotFoundComponent,
    CookieBannerComponent,
    LanguagePipe,
    GameComponent,
    PrivacyComponent,
    GameOverDialogComponent
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
    }),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
