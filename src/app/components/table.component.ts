import { Component, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [JsonPipe, TableModule, ToolbarModule, ButtonModule, DialogModule],
  template: `<p-toolbar>
      <p-button
        label="Agregar"
        (click)="visible = !visible"
        icon="pi pi-plus"
      />
    </p-toolbar>
    <p-table [value]="data()" />\
    <pre>
      {{data() | json}}
    </pre>
    <p-dialog
      header="Estudiante"
      [(visible)]="visible"
      [modal]="true"
      [style]="{ width: '50vw' }"
      [draggable]="false"
      [resizable]="false"
    >
      <ng-content />
    </p-dialog> `,
  styles: ``,
})
export class TableComponent {
  data = input.required<any[]>();

  visible: boolean = false;
}
