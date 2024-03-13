import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';

interface loginProps {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #auth = inject(Auth);

  login({ email, password }: loginProps) {
    return signInWithEmailAndPassword(this.#auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.#auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.#auth);
  }
}
