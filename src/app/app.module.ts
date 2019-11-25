import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events/events-parent.component";
import { EventChild } from "./events/events-child.component";
import { TimerAppComponent } from "./timer/timer.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventChild, TimerAppComponent],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
