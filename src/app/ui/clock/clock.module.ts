import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClockComponent} from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClockComponent],
  exports: [ClockComponent]
})
export class ClockModule {
}
