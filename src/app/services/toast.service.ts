import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

interface toastBody {
  severity: 'success' | 'info' | 'warn' | 'error';
  detail: string;
  summary: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  #messageService = inject(MessageService);

  public show(body: toastBody): void {
    this.#messageService.add(body);
  }
}
