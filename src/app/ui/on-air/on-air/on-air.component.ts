import {Component, OnInit} from '@angular/core';
import {OfflineService} from '../../../core/offline/offline.service';

@Component({
  selector: 'app-on-air',
  templateUrl: './on-air.component.html',
  styleUrls: ['./on-air.component.css']
})
export class OnAirComponent implements OnInit {

  public isOffline = false;

  constructor(private offlineService: OfflineService) {
  }

  ngOnInit() {
    this.offlineService
      .getStatus()
      .subscribe(isOffline => this.isOffline = isOffline);
  }

}
