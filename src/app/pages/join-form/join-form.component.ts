import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-form.component.html',
  styleUrl: './join-form.component.scss'
})
export class JoinFormComponent {
  @Output() onClose = new EventEmitter<void>();

  formData ={
    name: '',
    phone:'',
    message:''
  };

  constructor(private http: HttpClient){}

  submitForm() {
    this.http.post('https://gym-website-b1kh.onrender.com', this.formData).subscribe(() => {
      alert("Form submitted successfully!");
      this.close();
    }, error => {
      alert("Error occurred!");
      console.error(error);
    });
  }

  close(){
    this.onClose.emit();
  }

}
