import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSwitchPage } from './plant-switch.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSwitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSwitchPageRoutingModule {}
