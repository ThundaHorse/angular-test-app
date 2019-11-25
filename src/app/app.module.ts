import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";
import { EventsAppComponent } from "./events/events-parent.component";
import { EventChild } from "./events/events-child.component";

@NgModule({
  // declarations: [AppComponent],
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventChild],
  // providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
