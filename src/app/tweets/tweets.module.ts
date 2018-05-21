import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatBadgeModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TimeModule} from '../ui/time/time.module';
import {TweetCardComponent} from './components/tweet-card/tweet-card.component';
import {TweetMetricsComponent} from './components/tweet-metrics/tweet-metrics.component';
import {TweetsComponent} from './pages/tweets/tweets.component';

import {TweetsRoutingModule} from './tweets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TweetsRoutingModule,
    MatSnackBarModule,
    MatCardModule,
    TimeModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    NgxChartsModule
  ],
  declarations: [TweetsComponent, TweetCardComponent, TweetMetricsComponent]
})
export class TweetsModule {
}
