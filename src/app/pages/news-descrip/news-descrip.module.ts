import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDescripPageRoutingModule } from './news-descrip-routing.module';

import { NewsDescripPage } from './news-descrip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDescripPageRoutingModule
  ],
  declarations: [NewsDescripPage]
})
export class NewsDescripPageModule {}
