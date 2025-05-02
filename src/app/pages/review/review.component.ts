import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  reviews = [
    {
      name: 'Sayali Gaikwad',
      review: 'Suraj is an excellent fitness trainer. His effort for making me fit is awesome. His knowledge about maintaining good health and sharing & communication is really helping out a lot to stay fit. In addition to fitness he also knows and share nutrition diet plan for having good health. i appreciate his dedication and admire him for the same.',
      rating: 5,
      image: 'assets/images/review1.jpg' 
    },
    {
      name: 'Pramod',
      review: 'Your personalized workouts, nutritional advice, and constant motivation have been instrumental in helping me push beyond my limits and reach new heights in my fitness journey. Your passion for what you do is truly inspiring, and it has motivated me to stay committed and focused. I appreciate your dedication to helping me achieve my goals, and I am grateful for the positive impact you have had on my life. Thank you for pushing me to be the best version of myself and for believing in my potential every step of the way.',
      rating: 4,
      image: 'assets/images/review2.jpg'
    },
    {
      name: 'Divya',
      review: 'Training was very good. Sir paid attention to every detail everyday. I was someone wo would find difficulty in even lifting 5 kg but due to the proper training by sir my stamina increased everyday and I was able to lift even 65-70 kgs. The diet and was also comfortable to follow. The workouts were breathtaking yet enjoyable at the same time. Overall i gained my confidence, my stamina increased and my weight also went down properly.',
      rating: 5,
      image: 'assets/images/review3.jpg'
    }

  ];


}
