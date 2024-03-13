import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ValidatorsService } from '../../services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  #fb = inject(FormBuilder);
  #validatorsService = inject(ValidatorsService);

  loginForm = signal<FormGroup>(
    this.#fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.#validatorsService.emailPatter()),
        ],
      ],
      password: ['', [Validators.required]],
    })
  );

  sendLogin() {}
}
