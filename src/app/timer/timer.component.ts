import { Component } from "@angular/core";

@Component({
  selector: "timer-app",
  template: `
    <div class="container">
      <div class="timer-box">
        <p>I'm a timer component</p>
        <hr />
        <h1>{{ this.outputTime }}</h1>
        <button class="btn btn-md btn-round btn-success" (click)="timer()">
          start
        </button>
        <button class="btn btn-md btn-round btn-danger" (click)="stop()">
          Stop
        </button>
        <button class="btn btn-md btn-round btn-warning" (click)="resetTimer()">
          Reset
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .timer-box {
        border-width: 5px;
        border-color: black;
        border-style: dotted solid;
        padding: 10px 10px 10px 10px;
        border-radius: 10px;
      }
    `
  ]
})
export class TimerAppComponent {
  count = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  outputTime = "00:00:00";
  t;

  timer() {
    this.t = setTimeout(() => {
      this.add();
    }, 1000);
  }

  add() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }

    this.outputTime =
      (this.hours
        ? this.hours > 9
          ? `${this.hours}`
          : "0" + `${this.hours}`
        : "00") +
      ":" +
      (this.minutes
        ? this.minutes > 9
          ? `${this.minutes}`
          : "0" + `${this.minutes}`
        : "00") +
      ":" +
      (this.seconds > 9 ? `${this.seconds}` : "0" + `${this.seconds}`);

    this.timer();
  }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.outputTime = "00:00:00";
  }

  stop() {
    clearTimeout(this.t);
  }
}
