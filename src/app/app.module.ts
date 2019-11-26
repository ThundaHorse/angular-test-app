import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { TestApp } from "./app-component";
import { EventsAppComponent } from "./events/events-parent.component";
import { EventChild } from "./events/events-child.component";
import { TimerAppComponent } from "./timer/timer.component";
import { EventPage } from "./events/event-page/event-details.component";
import { CreateEventComponent } from "./events/shared/create-event.component";
import { Error404Component } from "./errors/404.component";

import { EventService } from "./common/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventRouteActivator } from "./events/event-page/event-route-activator.service";

import { routes } from "./routes";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    TestApp,
    EventsAppComponent,
    EventChild,
    TimerAppComponent,
    EventPage,
    CreateEventComponent,
    Error404Component
  ],
  bootstrap: [TestApp],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: "canDeactivateCreate", useValue: checkDirtyState }
  ]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("Blah");
  }
  return true;
}
