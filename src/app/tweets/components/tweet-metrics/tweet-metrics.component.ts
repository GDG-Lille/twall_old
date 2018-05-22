import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Metric} from '../../shared/domains/metric';

@Component({
  selector: 'app-tweet-metrics',
  templateUrl: './tweet-metrics.component.html',
  styleUrls: ['./tweet-metrics.component.css']
})
export class TweetMetricsComponent implements OnInit, OnChanges {

  @Input() public width: number;
  @Input() public height: number;
  @Input() public metrics: Array<Metric>;

  public view = [];
  public scheme: any;
  public totalOfTweets: number;

  ngOnInit() {
    this.view.push(this.width, this.height);

    this.scheme = {};
    this.scheme.domain = [];
    this.scheme.domain.push('#0E6993');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metrics.currentValue !== undefined) {
      this.metrics = changes.metrics.currentValue;
      this.totalOfTweets = 0;
      this.metrics[0].series.forEach(serie => this.totalOfTweets += serie.value);
    }
  }

}
