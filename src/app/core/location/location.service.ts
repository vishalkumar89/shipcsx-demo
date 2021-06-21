import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getLocation(): Observable<Position> {
    return new Observable((observer) => {
      Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then((position) => {
          observer.next(position);
          observer.complete();
        })
        .catch((err) => {
          observer.next(err);
          observer.complete();
        });
    });
  }
}
