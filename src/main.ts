import { enableProdMode, provideZoneChangeDetection, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { providers: [provideZoneChangeDetection() as unknown as StaticProvider] })
  .catch(err => console.error(err));
