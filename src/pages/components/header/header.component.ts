import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  login?: boolean;
  constructor(private authService: AuthService, private router: Router) { }


  logOut() {
    this.login = false;
    this.authService.logout();
  }

  loginM() {
    this.login = true;
    this.router.navigate(['/auth']);
  }
}
