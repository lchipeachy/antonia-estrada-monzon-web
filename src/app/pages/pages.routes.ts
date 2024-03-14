import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'students',
        loadComponent: () =>
          import('@pages/students.component').then((c) => c.StudentsComponent),
      },
      {
        path: 'professors',
        loadComponent: () =>
          import('@pages/professors.component').then(
            (c) => c.ProfessorsComponent
          ),
      },
    ],
  },
];
