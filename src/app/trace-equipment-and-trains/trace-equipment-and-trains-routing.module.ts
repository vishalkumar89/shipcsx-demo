import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraceEquipmentAndTrainsPage } from './trace-equipment-and-trains.page';

const routes: Routes = [
  {
    path: '',
    component: TraceEquipmentAndTrainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraceEquipmentAndTrainsPageRoutingModule {}
