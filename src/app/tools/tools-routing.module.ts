import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsPage } from './tools.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsPage,
  },
  {
    path: 'claim-management',
    loadChildren: () =>
      import('../claim-management/claim-management.module').then(
        (m) => m.ClaimManagementPageModule
      ),
  },
  {
    path: 'equipment-management',
    loadChildren: () =>
      import('../equipment-management/equipment-management.module').then(
        (m) => m.EquipmentManagementPageModule
      ),
  },
  {
    path: 'plant-inventory',
    loadChildren: () =>
      import('../plant-inventory/plant-inventory.module').then(
        (m) => m.PlantInventoryPageModule
      ),
  },
  {
    path: 'plant-switch',
    loadChildren: () =>
      import('../plant-switch/plant-switch.module').then(
        (m) => m.PlantSwitchPageModule
      ),
  },
  {
    path: 'shipment-problem-resolution',
    loadChildren: () =>
      import(
        '../shipment-problem-resolution/shipment-problem-resolution.module'
      ).then((m) => m.ShipmentProblemResolutionPageModule),
  },
  {
    path: 'shipping-instructions',
    loadChildren: () =>
      import('../shipping-instructions/shipping-instructions.module').then(
        (m) => m.ShippingInstructionsPageModule
      ),
  },
  {
    path: 'trace-equipment-and-trains',
    loadChildren: () =>
      import(
        '../trace-equipment-and-trains/trace-equipment-and-trains.module'
      ).then((m) => m.TraceEquipmentAndTrainsPageModule),
  },
  {
    path: 'unit-train-management',
    loadChildren: () =>
      import('../unit-train-management/unit-train-management.module').then(
        (m) => m.UnitTrainManagementPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsPageRoutingModule {}
