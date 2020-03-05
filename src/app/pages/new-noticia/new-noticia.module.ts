import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNoticiaPageRoutingModule } from './new-noticia-routing.module';

import { NewNoticiaPage } from './new-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewNoticiaPageRoutingModule
  ],
  declarations: [NewNoticiaPage]
})
export class NewNoticiaPageModule {}
