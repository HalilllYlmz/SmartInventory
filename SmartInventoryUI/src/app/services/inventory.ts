import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class Inventory {
  private apiUrl = 'http://localhost:5113/api/devices';

  constructor(private http: HttpClient) {}

  // Tüm cihazları getir
  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  // Tek bir cihaz getir
  getById(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }

  // Yeni cihaz ekle
  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device);
  }

  // Cihaz güncelle
  update(id: number, device: Device): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, device);
  }

  // Cihaz sil
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
