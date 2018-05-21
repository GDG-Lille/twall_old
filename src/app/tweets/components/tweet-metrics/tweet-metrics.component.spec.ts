import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TweetMetricsComponent} from './tweet-metrics.component';

describe('TweetMetricsComponent', () => {
  let component: TweetMetricsComponent;
  let fixture: ComponentFixture<TweetMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetMetricsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
