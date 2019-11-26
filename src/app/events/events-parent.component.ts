import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Component({
  template: `
    <div>
      <timer-app></timer-app>
      <div class="container">
        <div *ngFor="let event of events" class="col-md-5">
          <events-child
            (click)="handleEventClick(event.name)"
            [event]="event"
          ></events-child>
        </div>
      </div>
    </div>
  `
})
export class EventsAppComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClick(eventName) {
    this.toastr.success(eventName);
  }
}
