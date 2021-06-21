import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimManagementPage } from './claim-management.page';
import { FreightReportListComponent } from './freight-report-list/freight-report-list.component';
import { NewFreightReportComponent } from './new-freight-report/new-freight-report.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimManagementPage,
  },
  {
    path: 'new-freight-report',
    component: NewFreightReportComponent,
  },
  {
    path: 'freight-report-list',
    component: FreightReportListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimManagementPageRoutingModule {}
