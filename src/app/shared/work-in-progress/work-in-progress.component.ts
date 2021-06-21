import { Component, Input, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss'],
})
export class WorkInProgressComponent implements OnInit {
  @Input()
  title: string;

  online$: Observable<boolean>;

  constructor(private network: Network) {}

  ngOnInit() {
    this.online$ = this.network.onlineChanges;
  }
}
