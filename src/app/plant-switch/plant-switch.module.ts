import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSwitchPageRoutingModule } from './plant-switch-routing.module';

import { PlantSwitchPage } from './plant-switch.page';
import { WorkInProgressModule } from '../shared/work-in-progress/work-in-progress.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSwitchPageRoutingModule,
    WorkInProgressModule,
  ],
  declarations: [PlantSwitchPage],
})
export class PlantSwitchPageModule {}
