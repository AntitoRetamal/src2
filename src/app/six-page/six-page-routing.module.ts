import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SixPagePage } from './six-page.page';

const routes: Routes = [
  {
    path: '',
    component: SixPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SixPagePageRoutingModule {}
