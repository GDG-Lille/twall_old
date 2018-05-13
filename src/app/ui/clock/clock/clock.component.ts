import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  public now: Date;

  private interval: number;

  constructor() {
  }

  ngOnInit(): void {
    this.interval = window.setInterval(() => this.now = new Date(), 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.interval);
  }

}
