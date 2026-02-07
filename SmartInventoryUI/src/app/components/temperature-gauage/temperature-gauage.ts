import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Signalr } from '../../services/signalr';

@Component({
  selector: 'app-temperature-gauage',
  imports: [CommonModule],
  templateUrl: './temperature-gauage.html',
})
export class TemperatureGaugeComponent implements OnInit, OnDestroy {
  currentTemp = 0;
  sub!: Subscription;

  constructor(private signalr: Signalr, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.signalr.startConnection();

    this.sub = this.signalr.temperature$.subscribe((temp) => {
      this.currentTemp = temp;

      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  getColorClass(): string {
    if (this.currentTemp > 80) return 'text-red-600';
    if (this.currentTemp > 50) return 'text-orange-500';
    return 'text-blue-600';
  }

  getBarColorClass(): string {
    if (this.currentTemp > 80) return 'bg-red-600';
    if (this.currentTemp > 50) return 'bg-orange-500';
    return 'bg-blue-600';
  }
}
