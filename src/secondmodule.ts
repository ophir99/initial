import { NgModule } from "@angular/core";
import { PrimeModule } from "./primemodule";

import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root/root";
import { FirstComponent } from "./app/first/first.component";
@NgModule({
  declarations: [RootComponent, FirstComponent],
  imports: [PrimeModule, BrowserModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class SecondModule {
  constructor() {
    console.log("Pinging from Second module");
  }
}
