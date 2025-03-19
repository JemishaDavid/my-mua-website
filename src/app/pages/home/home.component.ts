import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">
      <h1>Welcome to Our Makeup Artistry</h1>
      <p>We create stunning looks for every occasion.</p>
      <img src="https://source.unsplash.com/800x400/?makeup" class="img-fluid rounded shadow">
      <br><br>
      <button class="btn btn-primary btn-lg" (click)="goToOurWork()">View Our Work</button>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;
      padding: 40px;
    }
    img {
      max-width: 100%;
      border-radius: 10px;
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToOurWork() {
    this.router.navigate(['/our-work']);
  }
}
