import { Component } from '@angular/core';
import {Router, NavigationEnd, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../pages/components/footer/footer.component';
import {HeaderComponent} from '../pages/components/header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    NgIf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        this.showLayout = !currentUrl.startsWith('/auth');
      }
    });
  }
}
