import { Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    ...canActivate(() => redirectLoggedInTo(['/dashboard'])),
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
