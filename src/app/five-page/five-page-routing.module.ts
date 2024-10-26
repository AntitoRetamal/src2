import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FivePagePage } from './five-page.page';

const routes: Routes = [
  {
    path: '',
    component: FivePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FivePagePageRoutingModule {}
