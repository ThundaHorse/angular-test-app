import { Component, Input } from "@angular/core";

@Component({
  selector: "events-child",
  template: `
    <hr />
    <p>Parent component event ID: {{ event.id }}</p>
    <p>Parent component event name: {{ event.name }}</p>
    <ul *ngFor="let thing of event">
      <li [ngClass]="getStyles(thing)">{{ thing.id }}: {{ thing.name }}</li>
      <div [ngSwitch]="oddOrEven(thing?.quantity)">
        <span *ngSwitchCase="'even'">I'm Even</span>
        <span *ngSwitchCase="'odd'">I'm Odd</span>
        <span *ngSwitchDefault>I'm Default</span>
      </div>
    </ul>
    <hr />
  `,
  styles: [
    `
      .green {
        color: green;
      }
      .red {
        color: red;
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
