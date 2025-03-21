import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-card">
      <h1>Welcome</h1>
      <p>Your one-stop destination for all things beauty!</p>
      <!-- <img src="assets/home.jpg" alt="Home Image" class="img-fluid rounded shadow"> -->
      <button class="cta-btn" (click)="goToOurWork()">View Our Work</button>
    </div>
  `,
  styles: [`
    .home-card {
      background-color: #ffe6f2;
      border-radius: 20px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      padding: 40px;
      text-align: center;
      max-width: 500px;
      margin: 80px auto;
    }
    h1 {
      color: #ff69b4;
      font-family: 'Brush Script MT', cursive;
      font-size: 3rem;
    }
    p {
      color: #6a0572;
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    .hero-image {
      width: 100%;
      border-radius: 15px;
      margin-bottom: 30px;
    }
    .cta-btn {
      background-color: #ff69b4;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .cta-btn:hover {
      background-color: #d63a92;
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToOurWork() {
    this.router.navigate(['/our-work']);
  }
}
