import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevenPagePage } from './seven-page.page';

const routes: Routes = [
  {
    path: '',
    component: SevenPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SevenPagePageRoutingModule {}
