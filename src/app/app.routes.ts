import { Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {PlansComponent} from './plans/plans.component';

export const routes: Routes = [
  { path: "payment", component: PaymentComponent },
  { path: "plans", component: PlansComponent }
];
