import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateNewsPage } from './update-news.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateNewsPageRoutingModule {}
