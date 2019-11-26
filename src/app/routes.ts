import { Routes } from "@angular/router";
import { EventsAppComponent } from "./events/events-parent.component";
import { EventPage } from "./events/event-page/event-details.component";

export const routes: Routes = [
  { path: "events", component: EventsAppComponent },
  { path: "events/:id", component: EventPage },
  { path: "", redirectTo: "/events", pathMatch: "full" }
];
