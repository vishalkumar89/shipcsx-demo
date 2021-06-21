import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingInstructionsPage } from './shipping-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingInstructionsPageRoutingModule {}
