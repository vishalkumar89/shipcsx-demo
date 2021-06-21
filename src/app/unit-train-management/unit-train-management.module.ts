import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitTrainManagementPageRoutingModule } from './unit-train-management-routing.module';

import { UnitTrainManagementPage } from './unit-train-management.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitTrainManagementPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [UnitTrainManagementPage],
})
export class UnitTrainManagementPageModule {}
