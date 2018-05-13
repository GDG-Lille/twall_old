import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-github-fork-me',
  templateUrl: './github-fork-me.component.html',
  styleUrls: ['./github-fork-me.component.css']
})
export class GithubForkMeComponent {

  @Input() public url: string;

}
