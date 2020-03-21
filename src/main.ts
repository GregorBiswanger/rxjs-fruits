import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
