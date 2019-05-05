import { Component, OnInit } from "@angular/core";

function lol() {
  return " simple Text";
}

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  toolName: string | number;
  yearOfRelease: number | string | boolean;
  languages: string[] = ["C", "C++", "Haskell", "Clojure", "Rust", "Golang"];
  yearsOfRelease: number[];
  constructor() {
    this.toolName = this.giveText("Earth", 2019);
    this.yearOfRelease = "2018";
    this.yearsOfRelease = [2018, 2019];
  }

  ngOnInit() {}

  giveText(name: string, year?: number | string): string | number {
    // return "Welcome to planet " + name + " " + year;

    return `Welcome to planet ${name} dghsk${year}jksdh `;
  }

  throwAlert(text: string) {
    alert(`Wow!!djkhjds${this.toolName}khfjkdfh ${text}`);
  }
}
