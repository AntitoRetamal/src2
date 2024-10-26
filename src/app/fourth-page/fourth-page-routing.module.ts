import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourthPagePage } from './fourth-page.page';

const routes: Routes = [
  {
    path: '',
    component: FourthPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourthPagePageRoutingModule {}
