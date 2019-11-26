import { Routes } from "@angular/router";
import { EventsAppComponent } from "./events/events-parent.component";
import { EventPage } from "./events/event-page/event-details.component";
import { CreateEventComponent } from "./events/shared/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-page/event-route-activator.service";

export const routes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreate"]
  },
  { path: "events", component: EventsAppComponent },
  {
    path: "events/:id",
    component: EventPage,
    canActivate: [EventRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" }
];
