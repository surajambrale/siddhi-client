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
      before:  '/assets/images/shubhambefore.jpg',
      after: '/assets/images/shubhamafter.jpg',
      name: 'Client 1',
      description: 'Lost 12kg in 3 months with our fat loss plan.'
    },
    {
      before:  '/assets/images/fatsabefore.jpg',
      after: '/assets/images/fatsaafter.jpg',
      name: 'Client 2',
      description: 'Lost 12kg in 3 months with our fat loss plan.'
    },
    {
      before:  '/assets/images/pramodbefore.jpg',
      after: '/assets/images/pramodafter.jpg',
      name: 'Client 3',
      description: 'Gained 6kg of muscle in 8 weeks.'
    },
    {
      before:  '/assets/images/mitulbefore.jpg',
      after: '/assets/images/mitulafter.jpg',
      name: 'Client 4',
      description: 'Improved strength and posture significantly.'
    },
    {
      before:  '/assets/images/ankitabefore.jpg',
      after: '/assets/images/ankitaafter.jpg',
      name: 'Client 5',
      description: 'Improved strength and posture significantly.'
    },
    {
      before:  '/assets/images/surajbefore.jpg',
      after: '/assets/images/surajafter.jpg',
      name: 'Client 6',
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
