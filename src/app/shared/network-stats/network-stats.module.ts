import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NetworkStatsComponent } from './network-stats.component';

@NgModule({
  declarations: [NetworkStatsComponent],
  imports: [CommonModule, IonicModule],
  exports: [NetworkStatsComponent],
})
export class NetworkStatsModule {}
