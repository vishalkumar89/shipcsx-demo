import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipmentProblemResolutionPageRoutingModule } from './shipment-problem-resolution-routing.module';

import { ShipmentProblemResolutionPage } from './shipment-problem-resolution.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipmentProblemResolutionPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [ShipmentProblemResolutionPage],
})
export class ShipmentProblemResolutionPageModule {}
