export interface Device {
  id?: number;
  deviceName: string;
  serialNumber: string;
  status: string;
  lastMaintenanceDate?: string;
}
