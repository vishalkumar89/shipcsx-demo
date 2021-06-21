import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { API_URLS } from '../constants';
import { VapidKeys } from './models/vapid-keys';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private activeSubscription: PushSubscription;

  constructor(private http: HttpClient, private swPush: SwPush) {}

  initNotificationSubscription() {
    this.getPublicKey()
      .pipe(
        switchMap((serverPublicKey) =>
          this.swPush
            .requestSubscription({ serverPublicKey })
            .catch((err) =>
              console.error('Unable to request subscription', err)
            )
        ),
        tap((subscription: PushSubscription) => {
          this.activeSubscription = subscription;
        }),
        switchMap((subscription) =>
          this.http.post(API_URLS.NOTIFICATION + '/subscribe', subscription)
        ),
        catchError(() => {
          if (this.activeSubscription) {
            console.log('inside notification subscription error...');
            this.activeSubscription.unsubscribe();
          }
          return of(null);
        })
      )
      .subscribe();
  }

  private getPublicKey(): Observable<string> {
    return this.http
      .get<VapidKeys>(API_URLS.NOTIFICATION + '/public-key')
      .pipe(map((response) => response.public));
  }
}
