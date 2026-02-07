import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { DeviceList } from './pages/device-list/device-list';
import { DeviceForm } from './pages/device-form/device-form';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: Dashboard },

  { path: 'devices', component: DeviceList },

  { path: 'devices/create', component: DeviceForm },

  { path: 'devices/edit/:id', component: DeviceForm },
];
