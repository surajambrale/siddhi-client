import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-coaches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-coaches.component.html',
  styleUrl: './our-coaches.component.scss'
})
export class OurCoachesComponent {

  coaches = [
    {
      name: 'Siddhi Thakur',
      role: 'Human Movement Specialist',
      image: 'assets/images/sidhhi.jpg',
      specialization: 'Human Movement Specialist',
      certification: 'Human Movement Specialist',
      bio: `Siddhi Thakur is an expert in human movement, known for her deep understanding of biomechanics and injury prevention. Her approach focuses on improving posture, mobility, and functional movement patterns to help clients move better, feel better, and perform at their best.`,
      social: {
        instagram: 'https://instagram.com/suraj',
        facebook: 'https://facebook.com/suraj'
      }
    },
    {
      name: 'Suraj Ambrale',
      role: 'Yoga Instructor',
      image: 'assets/images/dummyimg.jpeg',
      specialization: 'Yoga & Meditation',
      certification: 'Nutritionist, Advanced Fitness Trainer',
      bio: `Suraj Ambrale blends the art of yoga and meditation with science-based fitness training. With his background in nutrition and fitness, he offers a holistic wellness experience that balances the body and mind. His sessions are calming, energizing, and transformational.`,
      social: {
        instagram: 'https://instagram.com/anita',
        facebook: ''
      }
    }
  ];

  // Modal logic
  selectedCoach: any = null;

  openModal(coach: any) {
    this.selectedCoach = coach;
  }

  closeModal() {
    this.selectedCoach = null;
  }
}
