import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {ClockModule} from '../clock/clock.module';
import {OnAirModule} from '../on-air/on-air.module';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    OnAirModule,
    ClockModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
