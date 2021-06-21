import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreightReport } from './models/freight-report';
import { API_URLS, STORAGE_KEYS } from '../core/constants';

@Injectable()
export class ClaimManagementService {
  constructor(private http: HttpClient) {}

  saveFreightReport(freightReport: FreightReport): Observable<any> {
    return this.http.post<FreightReport>(API_URLS.FREIGHT_REPORT + '/save', {
      payload: freightReport,
      offlineStorageKey: STORAGE_KEYS.FREIGHT_REPORTS,
    });
  }

  getAllFreightReports(): Observable<FreightReport[]> {
    return this.http.get<FreightReport[]>(API_URLS.FREIGHT_REPORT);
  }
}
