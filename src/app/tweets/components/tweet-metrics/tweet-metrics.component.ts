import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweet-metrics',
  templateUrl: './tweet-metrics.component.html',
  styleUrls: ['./tweet-metrics.component.css']
})
export class TweetMetricsComponent implements OnInit {

  @Input() public width: number;
  @Input() public height: number;

  public mock: any;
  public view = [];
  public scheme = {
    domain: []
  };

  ngOnInit() {
    this.view.push(this.width, this.height);
    this.scheme.domain.push('#0E6993');

    this.mock = [
      {
        'name': '#DevFestLille',
        'series': [
          {
            'value': 1,
            'name': 4
          },
          {
            'value': 4,
            'name': 10
          },
          {
            'value': 5,
            'name': 18
          }
        ]
      }
    ];
  }

}
