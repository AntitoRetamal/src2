import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SixPagePageRoutingModule } from './six-page-routing.module';

import { SixPagePage } from './six-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SixPagePageRoutingModule
  ],
  declarations: [SixPagePage]
})
export class SixPagePageModule {}
