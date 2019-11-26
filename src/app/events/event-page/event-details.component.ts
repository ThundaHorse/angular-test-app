import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: "./event-details.component.html"
})
export class EventPage {
  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
