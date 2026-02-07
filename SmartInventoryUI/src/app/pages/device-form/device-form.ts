import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Inventory } from '../../services/inventory';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-device-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './device-form.html',
  styleUrl: './device-form.css',
})
export class DeviceForm implements OnInit {
  deviceForm: FormGroup;
  isEditMode = false;
  deviceId: number | null = null;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private inventoryService: Inventory,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.deviceForm = this.fb.group({
      deviceName: ['', [Validators.required, Validators.minLength(3)]],
      serialNumber: ['', Validators.required],
      status: ['Pasif', Validators.required],
      lastMaintenanceDate: [null],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.deviceId = +id;
      this.loadDeviceData(this.deviceId);
    }
  }

  loadDeviceData(id: number) {
    this.inventoryService.getById(id).subscribe((data) => {
      let formattedDate = '';
      if (data.lastMaintenanceDate) {
        formattedDate = new Date(data.lastMaintenanceDate).toISOString().split('T')[0];
      }

      this.deviceForm.patchValue({
        deviceName: data.deviceName,
        serialNumber: data.serialNumber, // Seri no buraya gelir
        status: data.status,
        lastMaintenanceDate: formattedDate,
      });
    });
  }

  onSubmit() {
    if (this.deviceForm.invalid) return;

    this.errorMessage = '';
    const deviceData: Device = this.deviceForm.value;
    const newSerial = deviceData.serialNumber.trim();

    this.inventoryService.getAll().subscribe((allDevices) => {
      const duplicateDevice = allDevices.find((d) => d.serialNumber === newSerial);

      if (duplicateDevice) {
        if (!this.isEditMode) {
          this.errorMessage = 'Bu seri numarası zaten kullanımda!';
          return;
        } else if (this.isEditMode && duplicateDevice.id !== this.deviceId) {
          this.errorMessage = 'Bu seri numarası başka bir cihazda kayıtlı!';
          return;
        }
      }

      this.saveDevice(deviceData);
    });
  }

  saveDevice(deviceData: Device) {
    if (this.isEditMode && this.deviceId) {
      this.inventoryService.update(this.deviceId, deviceData).subscribe(() => {
        this.router.navigate(['/devices']);
      });
    } else {
      this.inventoryService.create(deviceData).subscribe(() => {
        this.router.navigate(['/devices']);
      });
    }
  }
}
