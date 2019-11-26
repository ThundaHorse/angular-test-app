import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { TestApp } from "./app-component";
import { EventsAppComponent } from "./events/events-parent.component";
import { EventChild } from "./events/events-child.component";
import { TimerAppComponent } from "./timer/timer.component";
import { EventPage } from "./events/event-page/event-details.component";

import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";

import { routes } from "./routes";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    TestApp,
    EventsAppComponent,
    EventChild,
    TimerAppComponent,
    EventPage
  ],
  bootstrap: [TestApp],
  providers: [EventService, ToastrService]
})
export class AppModule {}
