import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesModule } from '@agilent/ui-element/tiles';
import { CarouselModule } from '@agilent/ui-element/carousel';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    TilesModule,
    CarouselModule, 
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
