import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../../common/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventFound = !!this.eventService.getEvent(+route.params["id"]);
    if (!eventFound) {
      this.router.navigate(["/404"]);
    }
    return eventFound;
  }
}
