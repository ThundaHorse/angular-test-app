import { Component } from "@angular/core";

@Component({
  selector: "events-parent",
  template: `
    <div>
      <h1>Yo</h1>
      <events-child #localVariable [event]="event1"></events-child>
      <button (click)="localVariable.logFoo()">Log Something</button>
    </div>
  `
})
export class EventsAppComponent {
  event1 = {
    id: 1,
    name: "Test"
  };
}
