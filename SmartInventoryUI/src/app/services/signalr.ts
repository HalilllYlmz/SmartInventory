import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

export interface MachineTelemetry {
  machineId: number;
  status: 'Running' | 'Stopped' | 'Error' | 'Idle';
  temperature: number;
  pressure: number;
  bladePosition: number;
  productionCount: number;
  lastUpdate: string;
}

@Injectable({
  providedIn: 'root',
})
export class Signalr {
  private hubUrl = 'http://localhost:5113/sensorHub';

  private hubConnection: signalR.HubConnection;

  public temperature$ = new BehaviorSubject<number>(0);

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.hubUrl, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();
  }

  public startConnection = () => {
    this.hubConnection
      .start()
      .then(() => {
        this.addTransferDataListener();
      })
      .catch((err) => console.log('SignalR connection error : ' + err));
  };

  public addTransferDataListener = () => {
    this.hubConnection.on('ReceiveTemperature', (temp: number) => {
      this.temperature$.next(temp);
    });
  };
}
