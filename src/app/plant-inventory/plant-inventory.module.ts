import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantInventoryPageRoutingModule } from './plant-inventory-routing.module';

import { PlantInventoryPage } from './plant-inventory.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantInventoryPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [PlantInventoryPage],
})
export class PlantInventoryPageModule {}
