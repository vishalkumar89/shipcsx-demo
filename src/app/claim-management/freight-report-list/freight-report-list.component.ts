import { Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';
import { ClaimManagementService } from '../claim-management.service';
import { FreightReport } from '../models/freight-report';

@Component({
  selector: 'app-freight-report-list',
  templateUrl: './freight-report-list.component.html',
  styleUrls: ['./freight-report-list.component.scss'],
})
export class FreightReportListComponent implements OnInit {
  online$: Observable<boolean>;
  freightReports$: Observable<FreightReport[]>;

  constructor(
    private network: Network,
    private claimManagementService: ClaimManagementService
  ) {}

  ngOnInit() {
    this.online$ = this.network.onlineChanges;
    this.freightReports$ = this.claimManagementService.getAllFreightReports();
  }
}
