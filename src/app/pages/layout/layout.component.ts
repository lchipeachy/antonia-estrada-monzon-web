import { Component } from '@angular/core';
import { FooterComponent } from '@components/footer';
import { SidebarComponent } from '@components/sidebar';
import { ToolbarComponent } from '@components/toolbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, ToolbarComponent],
  template: `
    <app-toolbar />
    <p>layout works!</p>
    <app-footer />
  `,
  styles: ``,
})
export class LayoutComponent {}
