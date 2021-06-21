import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class OfflineStorageInterceptorService implements HttpInterceptor {
  constructor(
    private network: Network,
    private storageService: StorageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isOnline = this.network.online;
    let updatedRequest = req;
    if (req.method.toLowerCase() === 'post') {
      if (isOnline) {
        const { payload } = req.body;
        updatedRequest = req.clone({
          body: payload,
        });
      } else {
        const { payload, offlineStorageKey } = req.body;
        this.storageService.set(offlineStorageKey, payload);
        this.requestSync(offlineStorageKey);
      }
    }
    return next.handle(updatedRequest);
  }

  private async requestSync(offlineStorageKey: string) {
    const swRegistration = await navigator.serviceWorker.ready;
    await swRegistration.sync.register(`SYNC.${offlineStorageKey}`);
  }
}
