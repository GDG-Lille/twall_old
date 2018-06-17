import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Metric} from '../domains/metric';
import {Tweet} from '../domains/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  private static URI_FUNCTIONS = environment.functions.uri;

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Retrieve a list of {@link Tweet} for the given hashtag.
   * @param {string} hashtag
   * @param {number} count
   * @return {Observable<Array<Tweet>>}
   */
  public getTodaysTweetsForHashtag(hashtag: string, count: number = 50): Observable<Array<Tweet>> {
    let httpQueryParam = new HttpParams();
    httpQueryParam = httpQueryParam.append('hashtag', hashtag);
    httpQueryParam = httpQueryParam.append('count', count.toString());

    return this.httpClient.get<Array<Tweet>>(
      `${TweetsService.URI_FUNCTIONS}/getTodaysTweetsForHashtag`,
      {
        params: httpQueryParam
      });
  }

  /**
   * Retrieve a list of {@link Metric} for the given hashtag.
   * @param {string} hashtag
   * @return {Observable<Array<Tweet>>}
   */
  public getTodaysMetricsForHashtag(hashtag: string): Observable<Array<Metric>> {
    let httpQueryParam = new HttpParams();
    httpQueryParam = httpQueryParam.append('hashtag', hashtag);

    return this.httpClient.get<Array<Metric>>(
      `${TweetsService.URI_FUNCTIONS}/getTodaysMetricsForHashtag`,
      {
        params: httpQueryParam
      });
  }

}
