import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/accueil/accueil.component').then(m => m.AccueilComponent)
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/a-propos/a-propos.component').then(m => m.AProposComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'nos-services',
    loadComponent: () => import('./pages/nos-services/nos-services.component').then(m => m.NosServicesComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
