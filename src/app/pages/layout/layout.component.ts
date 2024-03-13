import { Component, inject } from '@angular/core';
import { FooterComponent } from '@components/footer';
import { SidebarComponent } from '@components/sidebar';
import { ToolbarComponent } from '@components/toolbar';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, ToolbarComponent],
  template: `
    <app-toolbar />
    <p>layout works!</p>
    <button (click)="onSignOut()">Salir</button>
    <app-footer />
  `,
  styles: ``,
})
export class LayoutComponent {
  #authService = inject(AuthService);
  #router = inject(Router);

  onSignOut() {
    this.#authService
      .logout()
      .then(() => this.#router.navigate(['/']))
      .catch((error) => console.log(error));
  }
}
