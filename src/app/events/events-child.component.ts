import { Component, Input } from "@angular/core";

@Component({
  selector: "events-child",
  template: `
    <hr />
    <p>Parent component event ID: {{ event.id }}</p>
    <p>Parent component event name: {{ event.name }}</p>
    <hr />
  `
})
export class EventChild {
  @Input() event: any;
  someProperty: any = "Some value";

  logFoo() {
    console.log("Foo");
  }
}
