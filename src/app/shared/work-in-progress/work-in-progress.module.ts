import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WorkInProgressComponent } from './work-in-progress.component';
import { NetworkStatsModule } from '../network-stats/network-stats.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorkInProgressComponent],
  imports: [CommonModule, IonicModule, RouterModule, NetworkStatsModule],
  exports: [WorkInProgressComponent],
})
export class WorkInProgressModule {}
