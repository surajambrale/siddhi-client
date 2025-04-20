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
      name: 'Suraj Ambrale',
      role: 'Personal Trainer',
      image: 'assets/images/dummyimg.jpeg',
      specialization: 'Fat Loss, Muscle Gain',
      certification: 'Nutritionist, Advance Fitness Trainer',
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
      certification: 'Nutritionist, Advance Fitness Trainer',
      social: {
        instagram: 'https://instagram.com/anita',
        facebook: ''
      }
    }
    
  ];

}
