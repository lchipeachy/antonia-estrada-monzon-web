import { Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/login').then((c) => c.LoginComponent),
  },
  {
    path: 'dashboard',
    ...canActivate(() => redirectUnauthorizedTo(['/'])),
    loadChildren: () =>
      import('./pages/pages.routes').then((c) => c.pagesRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
