import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDescripPage } from './news-descrip.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDescripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDescripPageRoutingModule {}
