import { Injectable } from "@angular/core";

@Injectable()
export class EventService {
  getEvents() {
    return EVENTS;
  }
}

const EVENTS = [
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
