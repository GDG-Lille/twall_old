import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('easeIn', [
      transition(
        ':enter',
        [
          style({opacity: 0}),
          animate('500ms ease-in', style({opacity: 1}))
        ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  public isChti: boolean;

  private interval: number;

  ngOnInit(): void {
    this.interval = window.setInterval(() => this.isChti = !this.isChti, 10000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.interval);
  }

}
