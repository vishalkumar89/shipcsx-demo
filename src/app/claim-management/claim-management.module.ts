import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimManagementPageRoutingModule } from './claim-management-routing.module';

import { CoreModule } from '../core/core.module';
import { ClaimManagementPage } from './claim-management.page';
import { NetworkStatsModule } from '../shared/network-stats/network-stats.module';
import { NewFreightReportComponent } from './new-freight-report/new-freight-report.component';
import { ClaimManagementService } from './claim-management.service';
import { FreightReportListComponent } from './freight-report-list/freight-report-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ClaimManagementPageRoutingModule,
    CoreModule,
    NetworkStatsModule,
  ],
  declarations: [
    ClaimManagementPage,
    NewFreightReportComponent,
    FreightReportListComponent,
  ],
  providers: [ClaimManagementService],
})
export class ClaimManagementPageModule {}
