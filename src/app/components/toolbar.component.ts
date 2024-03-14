import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  template: `<p-menubar [model]="items()">
    <ng-template pTemplate="end"
      ><p-button
        label="Cerrar Sesión"
        (click)="onSignOut()"
        icon="pi pi-arrow-circle-left"
      /> </ng-template
  ></p-menubar>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  public items = signal<MenuItem[]>([]);

  constructor() {
    this.#loadItems();
  }

  #authService = inject(AuthService);
  #router = inject(Router);

  onSignOut() {
    this.#authService
      .logout()
      .then(() => this.#router.navigate(['/']))
      .catch((error) => console.log(error));
  }

  #loadItems(): void {
    this.items.set([
      {
        label: 'Alumnos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/dashboard/students'
      },
      {
        label: 'Maestros',
        icon: 'pi pi-fw pi-user',
        routerLink: '/dashboard/professors'
      },
    ]);
  }
}
