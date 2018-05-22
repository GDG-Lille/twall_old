import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {OfflineService} from '../../../core/offline/offline.service';
import {Metric} from '../../shared/domains/metric';
import {Tweet} from '../../shared/domains/tweet';
import {TweetsService} from '../../shared/services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
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
export class TweetsComponent implements OnInit, OnDestroy {

  public columns: Array<Array<Tweet>>;
  public metrics: Array<Metric>;
  public isLoading = false;
  private interval: number;
  private isOffline = false;

  constructor(private tweetsService: TweetsService,
              private offlineService: OfflineService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.offlineService
      .getStatus()
      .subscribe(isOffline => this.isOffline = isOffline);

    this.route.paramMap
      .subscribe(params => {
        this.isLoading = true;
        this.getTweets();

        let refreshFrequency = +params.get('refresh');
        refreshFrequency = refreshFrequency && refreshFrequency > 5000 ? refreshFrequency : 5000;
        this.interval = window.setInterval(() => this.getTweets(), refreshFrequency);
      });
  }

  ngOnDestroy(): void {
    window.clearInterval(this.interval);
  }

  /**
   * Define the {@link Tweet} property on which we track.
   * @param idx
   * @param tweet
   * @returns {string}
   */
  public trackByTweet(idx, tweet) {
    return tweet.id_str;
  }

  /**
   * Define the idx column on which we track.
   * @param idx
   * @param column
   * @returns {number}
   */
  public trackByColumn(idx, column) {
    return idx;
  }

  /**
   * Retrieve a list of {@link Tweet} for the hashtag DevfestLille from Api.
   * @private
   */
  private getTweets(): void {
    if (!this.isOffline) {
      this.tweetsService
        .getTweetsForHashtag(environment.default.hashtag, environment.default.count)
        .subscribe(
          tweets => {
            this.columns = [];
            tweets.forEach((tweet, idx) => {
              if (this.columns[idx % 4] === undefined) {
                this.columns[idx % 4] = [];
              }
              this.columns[idx % 4].push(tweet);
            });
            this.getMetrics();
            this.isLoading = false;
          },
          err => this.handleErr()
        );
    }
  }

  /**
   * Retrieve a list of {@link Metric} for the hashtag DevfestLille.
   * @private
   */
  private getMetrics(): void {
    this.tweetsService
      .getTodaysMetricsForHashtag(environment.default.hashtag)
      .subscribe(
        metrics => this.metrics = metrics,
        err => this.handleErr()
      );
  }

  /**
   * Manage errors from Api.
   * @private
   */
  private handleErr(): void {
    this.snackBar.open(
      'Erreur lors de la récupération des tweets',
      null,
      {
        duration: 3000,
        horizontalPosition: 'start',
        verticalPosition: 'bottom'
      });
  }

}
