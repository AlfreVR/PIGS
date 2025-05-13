import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { 
    path: 'about-us', 
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent) 
  },
  // Aggiungi altre rotte qui se necessario
];