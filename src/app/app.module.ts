import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events/events-parent.component";
import { EventChild } from "./events/events-child.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventChild],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
