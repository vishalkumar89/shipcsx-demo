import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantInventoryPage } from './plant-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: PlantInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantInventoryPageRoutingModule {}
