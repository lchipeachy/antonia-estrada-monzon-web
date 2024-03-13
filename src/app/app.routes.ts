import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/login').then((c) => c.LoginComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/pages.routes').then((c) => c.pagesRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
