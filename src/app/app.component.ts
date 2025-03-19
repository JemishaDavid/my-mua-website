import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <img src="assets/logo.png" alt="Logo" class="logo"> MUA Website
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/our-work">Our Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/our-packages">Our Packages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact-us">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/our-contact-details">Our Contact Details</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .logo {
      height: 50px;
      width: auto;
      margin-right: 10px;
    }
  `]
})
export class AppComponent {}
