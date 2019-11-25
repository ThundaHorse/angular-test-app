import { Component } from "@angular/core";

@Component({
  selector: "timer-app",
  template: `
    <div>
      <h1>{{ this.outputTime }}</h1>
      <button (click)="timer()">start</button>
      <button (click)="stop()">Stop</button>
      <button (click)="resetTimer()">Reset</button>
    </div>
  `
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
