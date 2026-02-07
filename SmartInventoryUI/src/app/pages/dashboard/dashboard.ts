import { Component } from '@angular/core';
import { TemperatureGaugeComponent } from '../../components/temperature-gauage/temperature-gauage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TemperatureGaugeComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
