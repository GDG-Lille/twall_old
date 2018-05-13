import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatTooltipModule} from '@angular/material';
import {GithubForkMeComponent} from './github-fork-me/github-fork-me.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [GithubForkMeComponent],
  exports: [GithubForkMeComponent]
})
export class GithubModule {
}
