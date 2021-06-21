import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipmentProblemResolutionPage } from './shipment-problem-resolution.page';

const routes: Routes = [
  {
    path: '',
    component: ShipmentProblemResolutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipmentProblemResolutionPageRoutingModule {}
