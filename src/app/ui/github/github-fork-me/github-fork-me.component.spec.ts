import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GithubForkMeComponent} from './github-fork-me.component';

describe('GithubForkMeComponent', () => {
  let component: GithubForkMeComponent;
  let fixture: ComponentFixture<GithubForkMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GithubForkMeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubForkMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
