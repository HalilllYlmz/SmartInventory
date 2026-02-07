import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Device } from '../../models/device.model';
import { Inventory } from '../../services/inventory';

@Component({
  selector: 'app-device-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './device-list.html',
  styleUrl: './device-list.css',
})
export class DeviceList implements OnInit {
  devices: Device[] = [];

  constructor(private inventoryService: Inventory, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices() {
    this.inventoryService.getAll().subscribe({
      next: (data) => {
        this.devices = data;
        console.log('Veriler geldi:', data);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Hata oluştu:', err),
    });
  }

  deleteDevice(id: number) {
    if (confirm('Silmek istediğine emin misin?')) {
      this.inventoryService.delete(id).subscribe(() => {
        this.loadDevices();
      });
    }
  }
}
