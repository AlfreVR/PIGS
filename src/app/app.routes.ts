import { Routes } from '@angular/router';
import { PaymentComponent } from '../pages/payment/payment.component';
import { PlansComponent } from '../pages/plans/plans.component';
import { FirestoreComponent } from '../pages/firestore/firestore.component';
import { ServerShopComponent } from '../pages/server-shop/server-shop.component';
import {LandingPageComponent} from '../pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: "payment", component: PaymentComponent },
  { path: "plans", component: PlansComponent },
  {path: 'firestore', component: FirestoreComponent},
  {path: 'servers', component: ServerShopComponent},
  {path: 'auth', loadComponent:() => import('../pages/auth-page/auth-page.component').then(m => m.AuthPageComponent)},
  { path: '**', redirectTo: '' } // Redirecciona rutas desconocidas a la landing

];
