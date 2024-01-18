import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/login').then((c) => c.LoginComponent),
  },
];
