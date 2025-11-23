import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  onSubmit() {
    // For now, just log the form data
    console.log('Guest book entry:', this.formData);
    // TODO: Implement actual form submission
    alert('Thank you for signing the guest book! Your message has been received.');
    this.resetForm();
  }
  
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}