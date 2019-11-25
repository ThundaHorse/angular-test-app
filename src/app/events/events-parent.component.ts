import { Component } from "@angular/core";

@Component({
  selector: "events-parent",
  template: `
    <div>
      <timer-app></timer-app>
      <events-child [event]="event1"></events-child>
    </div>
  `
})
export class EventsAppComponent {
  event1 = [
    {
      id: 1,
      name: "Test",
      quantity: 1
    },
    {
      id: 2,
      name: "Test 2",
      quantity: 2
    },
    {
      id: 3,
      name: "Test 3",
      quantity: 3
    },
    {
      id: 4,
      name: "Test 4",
      quantity: 4
    }
  ];
  event2 = {
    id: 1,
    name: "Test 1"
  };
}
