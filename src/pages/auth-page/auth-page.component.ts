import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  imports: [
    FormsModule,
    NgIf
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

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
  }

  async submitForm() {
    if (!this.isLogin && this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    try {
      if (this.isLogin) {
        await this.authService.login(this.email, this.password);
      } else {
        const userCredential = await this.authService.register(this.email, this.password);

        // Guardamos los datos extras en Firestore
        const uid = userCredential.user.uid;
        const userRef = doc(this.firestore, `users/${uid}`);

        await setDoc(userRef, {
          displayName: this.displayName,
          birthDate: this.birthDate,
          email: this.email,
          createdAt: new Date()
        });
      }

      this.router.navigate(['/']);
    } catch (err: any) {
      this.errorMessage = err.message;
    }
  }
}

