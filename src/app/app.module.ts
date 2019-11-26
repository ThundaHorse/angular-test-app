import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events/events-parent.component";
import { EventChild } from "./events/events-child.component";
import { TimerAppComponent } from "./timer/timer.component";

import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventChild, TimerAppComponent],
  bootstrap: [EventsAppComponent],
  providers: [EventService, ToastrService]
})
export class AppModule {}
