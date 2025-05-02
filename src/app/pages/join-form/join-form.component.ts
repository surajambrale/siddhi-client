import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-join-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-form.component.html',
  styleUrl: './join-form.component.scss'
})
export class JoinFormComponent {
  @Output() onClose = new EventEmitter<void>();

  formData = {
    name: '',
    phone: '',
    message: ''
  };

  isSubmitting = false; // Flag for loading state

  constructor(private http: HttpClient) {}

  submitForm(form: NgForm) {
    // Check if form is invalid (i.e., required fields not filled)
    if (form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.isSubmitting = true;

    // Submit the form data to the API
    this.http.post('https://gym-website-repo.onrender.com/enquiries', this.formData).subscribe({
      next: () => {
        alert('Form submitted successfully!');
        this.isSubmitting = false;
        this.close();
      },
      error: (error) => {
        alert('Error occurred!');
        this.isSubmitting = false;
        console.error(error);
      }
    });
  }

  close() {
    this.onClose.emit();
  }
}
