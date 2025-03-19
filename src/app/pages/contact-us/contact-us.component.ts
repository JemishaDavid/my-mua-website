import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  template: `
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div class="mb-3">
          <label class="form-label">WhatsApp Number / Email:</label>
          <input type="text" class="form-control" placeholder="Enter your contact details">
        </div>
        <div class="mb-3">
          <label class="form-label">Message:</label>
          <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Send Message</button>
      </form>
    </div>
  `,
  styles: [`
    .contact-form {
      max-width: 500px;
      margin: auto;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class ContactUsComponent {}
