import { Component, inject } from '@angular/core';
import { AuthService } from '../../services';
import { Router, RouterOutlet } from '@angular/router';
import {
  FooterComponent,
  SidebarComponent,
  ToolbarComponent,
} from '@components/index';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, ToolbarComponent, RouterOutlet],
  template: `
    <app-toolbar />
    <router-outlet />
    <app-footer />
  `,
  styles: ``,
})
export class LayoutComponent {}
