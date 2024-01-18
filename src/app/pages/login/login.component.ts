import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  eyeIconState = signal(false);

  changeEyeIconState() {
    this.eyeIconState.update((icon) => !icon);
  }
}
