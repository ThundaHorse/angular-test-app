import { Component, Input } from "@angular/core";

@Component({
  selector: "events-child",
  template: `
    <div class="info">
      <p>Parent component event ID: {{ event.id }}</p>
      <p>Parent component event name: {{ event.name }}</p>
    </div>
  `
})
export class EventChild {
  @Input() event: any;
  logFoo() {
    console.log("Foo");
  }
}
