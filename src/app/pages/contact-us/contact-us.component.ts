import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name = '';
  contactInfo = '';
  comments = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted!', this.name, this.contactInfo, this.comments);
      alert('Thank you for contacting us!');
      form.reset();
    }
  }
}
