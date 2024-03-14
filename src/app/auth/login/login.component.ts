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
import { AuthService, ToastService, ValidatorsService } from '../../services';
import { Router } from '@angular/router';

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
  #authService = inject(AuthService);
  #router = inject(Router);
  #toastService = inject(ToastService);

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

  onLogin() {
    if (this.loginForm().invalid) this.loginForm().markAllAsTouched();

    this.#authService
      .login(this.loginForm().value)
      .then((response) => {
        console.log(response);
        this.#router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log(error);
        this.#toastService.show({
          severity: 'error',
          summary: 'Error al iniciar sesión',
          detail: 'Credenciales invalidas',
        });
      });
  }

  onGooglePop() {
    this.#authService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.#router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log(error);
        this.#toastService.show({
          severity: 'error',
          summary: 'Error al iniciar sesión',
          detail: 'Credenciales invalidas',
        });
      });
  }
}
