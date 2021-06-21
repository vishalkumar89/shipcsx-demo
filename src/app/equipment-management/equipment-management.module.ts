import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentManagementPageRoutingModule } from './equipment-management-routing.module';

import { EquipmentManagementPage } from './equipment-management.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentManagementPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [EquipmentManagementPage],
})
export class EquipmentManagementPageModule {}
