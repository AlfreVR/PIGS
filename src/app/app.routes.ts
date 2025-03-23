import { Routes } from '@angular/router';
import {FirestoreComponent} from '../pages/firestore/firestore.component';
import {ServerShopComponent} from '../pages/server-shop/server-shop.component';

export const routes: Routes = [
  {path: 'firestore', component: FirestoreComponent},
  {path: 'servers', component: ServerShopComponent},
];
