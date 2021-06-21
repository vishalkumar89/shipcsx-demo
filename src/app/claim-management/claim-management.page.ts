import { Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-claim-management',
  templateUrl: './claim-management.page.html',
  styleUrls: ['./claim-management.page.scss'],
})
export class ClaimManagementPage implements OnInit {
  online$: Observable<boolean>;

  constructor(private network: Network) {}

  ngOnInit() {
    this.online$ = this.network.onlineChanges;
  }
}
