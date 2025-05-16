// src/app/services/payment-state.service.ts
import { Injectable } from '@angular/core';
import {Plans, Server} from '../app/app.interfaces';


@Injectable({ providedIn: 'root' })
export class PaymentStateService {
  private server?: Server;
  private plan?: Plans;

  setServer(server: Server) {
    this.server = server;
  }
  getServer(): Server | undefined {
    return this.server;
  }

  setPlan(plan: Plans) {
    this.plan = plan;
  }
  getPlan(): Plans | undefined {
    return this.plan;
  }

  clear() {
    this.server = undefined;
    this.plan = undefined;
  }
}
