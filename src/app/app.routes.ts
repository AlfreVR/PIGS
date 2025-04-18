import { Routes } from '@angular/router';
import { PaymentComponent } from '../pages/payment/payment.component';
import { PlansComponent } from '../pages/plans/plans.component';
import { FirestoreComponent } from '../pages/firestore/firestore.component';
import { ServerShopComponent } from '../pages/server-shop/server-shop.component';

export const routes: Routes = [
  { path: "payment", component: PaymentComponent },
  { path: "plans", component: PlansComponent },
  {path: 'firestore', component: FirestoreComponent},
  {path: 'servers', component: ServerShopComponent},
];
