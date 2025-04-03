import { Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {PlansComponent} from './plans/plans.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: "payment", component: PaymentComponent },
  { path: "plans", component: PlansComponent },
  { path: '**', redirectTo: '' } // Redirecciona rutas desconocidas a la landing

];
