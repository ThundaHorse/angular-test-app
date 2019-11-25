import { Component } from "@angular/core";

@Component({
  selector: "events-parent",
  template: `
    <div>
      <h1>Yo</h1>
      <events-child *ngFor="let event of event1" [event]="event"></events-child>
    </div>
  `
})
export class EventsAppComponent {
  event1 = [
    {
      id: 1,
      name: "Test"
    },
    {
      id: 2,
      name: "Test 2"
    },
    {
      id: 3,
      name: "Test 3"
    },
    {
      id: 4,
      name: "Test 4"
    }
  ];
}
