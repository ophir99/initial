import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input()
  acceptor;
  toolName = "Rust";

  @Output()
  customEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  sendData(language: string) {
    this.customEvent.emit(language);
  }
}
