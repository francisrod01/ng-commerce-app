import { enableProdMode, provideZoneChangeDetection, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Note: `provideZoneChangeDetection()` returns an EnvironmentProviders value which
// cannot be passed directly to the NgModule `providers` option (it expects StaticProvider[]).
// To keep the runtime behavior and avoid passing incorrect options to bootstrap, we cast
// the providers value here. Prefer migrating to `bootstrapApplication` (standalone app)
// in a future refactor so environment providers can be passed directly without casting.
platformBrowserDynamic().bootstrapModule(AppModule, { providers: [provideZoneChangeDetection() as unknown as StaticProvider] })
  .catch(err => console.error(err));
