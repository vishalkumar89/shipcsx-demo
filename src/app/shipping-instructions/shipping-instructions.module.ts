import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingInstructionsPageRoutingModule } from './shipping-instructions-routing.module';

import { ShippingInstructionsPage } from './shipping-instructions.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingInstructionsPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [ShippingInstructionsPage],
})
export class ShippingInstructionsPageModule {}
