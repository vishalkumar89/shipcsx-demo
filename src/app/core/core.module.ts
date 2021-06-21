import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OfflineStorageInterceptorService } from './storage/offline-storage-interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OfflineStorageInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
