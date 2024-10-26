import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SevenPagePageRoutingModule } from './seven-page-routing.module';

import { SevenPagePage } from './seven-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SevenPagePageRoutingModule
  ],
  declarations: [SevenPagePage]
})
export class SevenPagePageModule {}
