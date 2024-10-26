import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthPagePageRoutingModule } from './fourth-page-routing.module';

import { FourthPagePage } from './fourth-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourthPagePageRoutingModule
  ],
  declarations: [FourthPagePage]
})
export class FourthPagePageModule {}
