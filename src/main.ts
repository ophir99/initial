import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";

import { PrimeModule } from "./primemodule";
import { SecondModule } from "./secondmodule";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(SecondModule)
  .catch(err => console.error(err));
