import { NgModule } from "@angular/core";
import { PrimeModule } from "./primemodule";

import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root/root";
import { FirstComponent } from "./app/first/first.component";
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { ContentComponent } from './app/content/content.component';
@NgModule({
  declarations: [RootComponent, FirstComponent, HeaderComponent, FooterComponent, ContentComponent],
  imports: [PrimeModule, BrowserModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class SecondModule {
  constructor() {
    console.log("Pinging from Second module");
  }
}
