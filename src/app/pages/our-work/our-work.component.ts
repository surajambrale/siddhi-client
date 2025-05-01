import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.scss'
})
export class OurWorkComponent {
  works = [
    {
      before:  '/assets/images/before.jpg',
      after: '/assets/images/after.jpg',
      name: 'Client 1',
      description: 'Lost 12kg in 3 months with our fat loss plan.'
    },
    {
      before:  '/assets/images/before.jpg',
      after: '/assets/images/after.jpg',
      name: 'Client 2',
      description: 'Gained 6kg of muscle in 8 weeks.'
    },
    {
      before:  '/assets/images/before.jpg',
      after: '/assets/images/after.jpg',
      name: 'Client 3',
      description: 'Improved strength and posture significantly.'
    }
  ];

  isModalOpen = false;
  selectedImage: string = '';

  openModal(image: string) {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = '';
  }
}
