import { Component, Input } from "@angular/core";

@Component({
  selector: "events-child",
  template: `
    <hr />
    <div class="container">
      <p class="eventId" [routerLink]="['/events', event.id]">
        Parent component event ID: {{ event.id }}
      </p>
      <p>Parent component event name: {{ event.name }}</p>
      <div [ngSwitch]="oddOrEven(event?.quantity)">
        <span *ngSwitchCase="'even'" [ngClass]="getStyles(event)"
          >My ID is Even</span
        >
        <span *ngSwitchCase="'odd'" [ngClass]="getStyles(event)"
          >My ID is Odd</span
        >
        <span *ngSwitchDefault>I'm Default</span>
      </div>
    </div>
  `,
  styles: [
    `
      .green {
        color: green;
      }
      .red {
        color: red;
      }
      p.eventId {
        cursor: pointer;
      }
      p.eventId:hover {
        color: blue;
      }
      li {
        cursor: pointer;
      }
      li:hover {
        color: yellow;
      }
    `
  ]
})
export class EventChild {
  @Input() event: any;

  getStyles(input) {
    const evenIds = input.id % 2 === 0;
    const oddIds = input.id % 2 !== 0;
    return { green: evenIds, red: oddIds };
  }

  oddOrEven(input) {
    return input % 2 === 0 ? "even" : "odd";
  }
}
