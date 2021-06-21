import { Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {
  online$: Observable<boolean>;
  features = [
    {
      name: 'Claims Management',
      route: 'claim-management',
      demoable: true,
    },
    {
      name: 'Equipment Specifications',
      route: 'equipment-management',
      demoable: false,
    },
    {
      name: 'Plant Inventory',
      route: 'plant-inventory',
      demoable: false,
    },
    {
      name: 'Plant Switch',
      route: 'plant-switch',
      demoable: false,
    },
    {
      name: 'Shipment Problem Resolution',
      route: 'shipment-problem-resolution',
      demoable: false,
    },
    {
      name: 'Shipping Instructions',
      route: 'shipping-instructions',
      demoable: false,
    },
    {
      name: 'Trace Equipment & Trains',
      route: 'trace-equipment-and-trains',
      demoable: false,
    },
    {
      name: 'Unit Train Management',
      route: 'unit-train-management',
      demoable: false,
    },
  ];

  constructor(private network: Network) {}

  ngOnInit() {
    this.online$ = this.network.onlineChanges;
  }
}
