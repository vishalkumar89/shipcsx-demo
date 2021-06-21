import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentManagementPage } from './equipment-management.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentManagementPageRoutingModule {}
