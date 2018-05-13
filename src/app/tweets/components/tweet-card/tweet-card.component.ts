import {Component, Input} from '@angular/core';
import {Tweet} from '../../shared/domains/tweet';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent {

  @Input() public tweet: Tweet;

}
