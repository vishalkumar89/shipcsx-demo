import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {
    this.init();
  }

  public async set<T>(key: string, value: T): Promise<T[]> {
    const items = ((await localforage?.getItem(key)) as T[]) || [];
    items.push(value);
    return await localforage?.setItem(key, items);
  }

  public async get<T>(key: string): Promise<T[]> {
    return await localforage?.getItem(key);
  }

  private init() {
    const { name, version } = environment.indexDB;
    localforage.config({
      name,
      version,
    });
  }
}
