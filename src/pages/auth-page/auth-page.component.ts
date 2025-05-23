import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  email = '';
  password = '';
  confirmPassword = '';
  displayName = '';
  birthDate = '';

  isLogin = true;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private firestore: Firestore) {}

  //Errores
  getFriendlyAuthErrorMessage(code: string): string {
    switch (code) {
      case 'auth/invalid-email':
        return 'El correo electrónico no es válido.';
      case 'auth/user-not-found':
        return 'No se encontró una cuenta con este correo.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      case 'auth/email-already-in-use':
        return 'Este correo ya está registrado.';
      case 'auth/weak-password':
        return 'La contraseña es muy débil. Usa al menos 6 caracteres.';
      case 'auth/missing-password':
        return 'Por favor, ingresa una contraseña.';
      case 'auth/missing-email':
        return 'Por favor, ingresa un correo electrónico.';
      default:
        return 'Ocurrió un error inesperado. Intenta nuevamente.';
    }
  }

  //Selector de nacimiento
  birthDay: number | null = null;
  birthMonth: number | null = null;
  birthYear: number | null = null;

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ];
  years: number[] = [];

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
  }

  async submitForm() {
    if (!this.isLogin && this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords not match';
      return;
    }

    try {
      if (this.isLogin) {
        await this.authService.login(this.email, this.password);
      } else {
        const userCredential = await this.authService.register(this.email, this.password);

        const uid = userCredential.user.uid;
        const userRef = doc(this.firestore, `users/${uid}`);
        const birthDate = new Date(this.birthYear!, this.birthMonth! - 1, this.birthDay!);

        await setDoc(userRef, {
          displayName: this.displayName,
          birthDate: birthDate,
          email: this.email,
          createdAt: new Date()
        });
      }

      this.router.navigate(['/']);
    } catch (err: any) {
      console.error('Error durante autenticación o escritura:', err);
      this.errorMessage = this.getFriendlyAuthErrorMessage(err.code||err.message);
    }
  }
}

