import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FivePagePageRoutingModule } from './five-page-routing.module';

import { FivePagePage } from './five-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivePagePageRoutingModule
  ],
  declarations: [FivePagePage]
})
export class FivePagePageModule {}
