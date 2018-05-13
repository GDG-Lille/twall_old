import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {OnAirComponent} from './on-air/on-air.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [OnAirComponent],
  exports: [OnAirComponent]
})
export class OnAirModule {
}
