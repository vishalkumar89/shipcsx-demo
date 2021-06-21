import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-stats',
  templateUrl: './network-stats.component.html',
  styleUrls: ['./network-stats.component.scss'],
})
export class NetworkStatsComponent implements OnInit {
  @Input()
  online: boolean = true;

  constructor() {}

  ngOnInit() {}
}
