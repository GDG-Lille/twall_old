import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  private status = new Subject<boolean>();

  constructor() {
    this.registerOnOnline();
    this.registerOnOffline();
  }

  /**
   * Get the current status of the network.
   * @returns {Observable<boolean>}
   */
  public getStatus(): Observable<boolean> {
    return this.status.asObservable();
  }

  /**
   * Trigger when the network is ONLINE.
   * Emit false because its online.
   */
  private registerOnOnline() {
    window.ononline = (evt: Event): void => {
      this.status.next(false);
    };
  }

  /**
   * Trigger when the network is OFFLINE.
   * Emit true because its offline.
   */
  private registerOnOffline() {
    window.onoffline = (evt: Event): void => {
      this.status.next(true);
    };
  }

}
