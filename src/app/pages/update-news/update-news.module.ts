import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateNewsPageRoutingModule } from './update-news-routing.module';

import { UpdateNewsPage } from './update-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateNewsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateNewsPage]
})
export class UpdateNewsPageModule {}
