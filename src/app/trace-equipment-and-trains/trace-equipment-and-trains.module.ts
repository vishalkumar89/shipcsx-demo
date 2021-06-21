import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraceEquipmentAndTrainsPageRoutingModule } from './trace-equipment-and-trains-routing.module';

import { TraceEquipmentAndTrainsPage } from './trace-equipment-and-trains.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraceEquipmentAndTrainsPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [TraceEquipmentAndTrainsPage],
})
export class TraceEquipmentAndTrainsPageModule {}
